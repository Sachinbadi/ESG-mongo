import os
from fastapi import FastAPI, HTTPException, UploadFile, File
from pydantic import BaseModel
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_astradb import AstraDBVectorStore
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough
import time
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load environment variables
load_dotenv()

# Astra DB Configuration
ASTRA_DB_APPLICATION_TOKEN = os.getenv("ASTRA_DB_APPLICATION_TOKEN")
ASTRA_DB_API_ENDPOINT = os.getenv("ASTRA_DB_API_ENDPOINT")
COLLECTION_NAME = "talk_to_pdf"

# Google API Configuration
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY")

# Initialize embeddings
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

# Initialize vector store
vector_store = AstraDBVectorStore(
    embedding=embeddings,
    collection_name=COLLECTION_NAME,
    token=ASTRA_DB_APPLICATION_TOKEN,
    api_endpoint=ASTRA_DB_API_ENDPOINT,
    metric="cosine"
)

# Initialize language model
llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro-002", temperature=0.2, max_output_tokens=8000, top_p=0.95, top_k=40)

class ChatRequest(BaseModel):
    question: str
    source: Optional[str] = None 

def summarize_content(content):
    # Retrieve relevant information from the vector store
    retriever = vector_store.as_retriever(search_kwargs={"k": 5})  # Use the first 1000 characters as a query
    relevant_docs = retriever.invoke(content[:1000])  # Use the first 1000 characters as a query
    relevant_content = "\n\n".join([doc.page_content for doc in relevant_docs])
    relevant_content = f"{content}\n\n{relevant_content}"  # Combine PDF content with retrieved content

    summarization_prompt = """Please provide a concise summary of the following content, incorporating any relevant information from the additional context provided:

    Main Content:
    {content}

    Additional Context:
    {relevant_content}

    Summary:"""
    prompt = ChatPromptTemplate.from_template(summarization_prompt)
    
    summarization_chain = prompt | llm | StrOutputParser()
    
    try:
        summary = summarization_chain.invoke({
            "content": content,
            "relevant_content": relevant_content
        })
        return summary
    except Exception as e:
        return f"An error occurred while summarizing: {e}"

def chat_with_pdf(question):
    # Set up the retriever
    retriever = vector_store.as_retriever(search_kwargs={"k": 5})
    print(retriever)

    # Set up the RAG prompt template
    template = """You are an AI assistant tasked with answering questions based on the provided context. 
    Please analyze the context carefully and provide a detailed, accurate answer to the question.

    Context:
    {context}

    Question: {question}

    Answer:"""
    prompt = ChatPromptTemplate.from_template(template)

    # Set up the RAG chain
    rag_chain = (
        {"context": retriever | (lambda docs: "\n\n".join(doc.page_content for doc in docs)), "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )

    # Generate the answer
    try:
        response = rag_chain.invoke(question)
        return response
    except Exception as e:
        return f"An error occurred: {e}"    

@app.post("/process_pdf")
async def process_pdf_api(file: UploadFile = File(...)):
    try:
        # Save the uploaded file temporarily
        temp_file_path = f"temp_{file.filename}"
        with open(temp_file_path, "wb") as buffer:
            buffer.write(await file.read())

        # Process the PDF
        loader = PyPDFLoader(temp_file_path)
        documents = loader.load()

        #generating summary
        full_content = "\n".join([doc.page_content for doc in documents])
        summary = summarize_content(full_content)
        
        # Split text into chunks
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunks = text_splitter.split_documents(documents)
        
        # Store chunks in Astra DB with batching and retries
        batch_size = 50
        max_retries = 3
        total_chunks = len(chunks)
        successful_inserts = 0
        inserted_indices = []

        for i in range(0, total_chunks, batch_size):
            batch = chunks[i:i+batch_size]
            retry_count = 0
            while retry_count < max_retries:
                try:
                    # Add source metadata to each document
                    for doc in batch:
                        doc.metadata["source"] = file.filename

                    # Let AstraDB generate IDs
                    inserted_ids = vector_store.add_documents(batch)
                    
                    successful_inserts += len(batch)
                    inserted_indices.extend(inserted_ids)
                    break
                except Exception as e:
                    retry_count += 1
                    if retry_count == max_retries:
                        raise HTTPException(status_code=500, detail=f"Failed to insert batch {i//batch_size + 1} after {max_retries} attempts")
                    time.sleep(5)

        # Clean up the temporary file
        os.remove(temp_file_path)

        if successful_inserts == total_chunks:
            return {
                "message": f"PDF processed and stored successfully. Added all {total_chunks} chunks to the database.",
                "summary": summary,
                "inserted_indices": inserted_indices
            }
        else:
            return {
                "message": f"PDF processing partially successful. Added {successful_inserts} out of {total_chunks} chunks to the database.",
                "summary": summary,
                "inserted_indices": inserted_indices
            }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing PDF: {str(e)}")

@app.post("/chat_with_pdf")
async def chat_with_pdf_api(chat_request: ChatRequest):
    try:
        # Set up the retriever with optional source filtering
        search_kwargs = {"k": 5}
        if chat_request.source:
            search_kwargs["filter"] = {"source": chat_request.source}
        
        retriever = vector_store.as_retriever(search_kwargs=search_kwargs)

        # Set up the RAG prompt template
        template = """You are an AI assistant tasked with answering questions based on the provided context. 
        Please analyze the context carefully and provide a detailed, accurate answer to the question.

        Context:
        {context}

        Question: {question}

        Answer:"""
        prompt = ChatPromptTemplate.from_template(template)

        # Set up the RAG chain
        rag_chain = (
            {"context": retriever | (lambda docs: "\n\n".join(doc.page_content for doc in docs)), "question": RunnablePassthrough()}
            | prompt
            | llm
            | StrOutputParser()
        )

        # Generate the answer
        response = rag_chain.invoke(chat_request.question)
        return {
            "answer": response, 
            "source_filtered": chat_request.source is not None,
            "filter_applied": chat_request.source if chat_request.source else "None"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)