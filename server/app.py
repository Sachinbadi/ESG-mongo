import os
import logging
import uuid
from dotenv import load_dotenv
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from pymongo import MongoClient, errors
from gridfs import GridFS
import google.generativeai as genai
import key_param
import traceback
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

# Initialize logging
logging.basicConfig(filename="event_log.txt", level=logging.INFO, format="%(asctime)s:%(levelname)s:%(message)s")

# Set up FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set up Google API for embeddings
genai.configure(api_key=key_param.google_api_key)

# Custom Embedding class
class CustomEmbedding():
    def embed_documents(self, texts):
        return [self.embed_query(text) for text in texts]

    def embed_query(self, text):
        result = genai.embed_content(
            model="models/embedding-001",
            content=text,
            task_type="retrieval_document",
            title="Embedding of text"
        )
        return result['embedding']

# Set up MongoDB connection
try:
    client = MongoClient(key_param.MONGO_URI)
    db = client["pdf_demo"]
    collection = db["embedded_pdf_texts"]
    fs = GridFS(db)  # Initialize GridFS for PDF storage
    print("Successfully connected to MongoDB")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
    exit(1)

# Function to extract text from PDFs
def get_pdf_text(pdf_file):
    """Extract text from a PDF file"""
    text = ""
    try:
        pdf_reader = PdfReader(pdf_file)
        for page in pdf_reader.pages:
            text += page.extract_text()
    except Exception as e:
        print(f"Error reading PDF: {e}")
        logging.error(f"Error reading PDF: {e}")
        raise e
    return text

# Function to split text into chunks
def get_text_chunks(raw_text):
    """Split text into chunks for better processing"""
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=512,
        chunk_overlap=50
    )
    chunks = text_splitter.split_text(raw_text)
    return chunks

# FastAPI endpoint to handle PDF upload and store it in MongoDB GridFS
@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        # Store the uploaded PDF in GridFS
        pdf_id = fs.put(await file.read(), filename=file.filename)
        
        # Log and confirm storage
        logging.info(f"Stored PDF {file.filename} in MongoDB with ID {pdf_id}")
        print(f"Stored PDF {file.filename} in MongoDB with ID {pdf_id}")

        return JSONResponse(status_code=200, content={"message": "PDF stored successfully.", "pdf_id": str(pdf_id)})
    
    except Exception as e:
        logging.error(f"Error storing PDF: {e}")
        print(traceback.format_exc())
        return JSONResponse(status_code=500, content={"message": f"Error storing PDF: {str(e)}"})

# Function to process PDF from MongoDB GridFS and store embedded chunks into MongoDB as clusters
def process_and_store_pdf_from_gridfs(pdf_id):
    try:
        # Load the PDF from MongoDB GridFS
        pdf_file = fs.get(pdf_id)
        raw_text = get_pdf_text(pdf_file)
        text_chunks = get_text_chunks(raw_text)
        logging.info(f"Text extracted and split into chunks for PDF ID {pdf_id}")
        print(f"Text extracted and split into chunks for PDF ID {pdf_id}")

        # Generate a unique ID for the PDF document (cluster ID)
        document_id = str(uuid.uuid4())

        # Create an array to store chunks and their corresponding embeddings
        chunk_embeddings = []
        
        # Initialize custom embeddings
        custom_embeddings = CustomEmbedding()

        for chunk in text_chunks:
            # Generate embedding for each chunk
            embedding = custom_embeddings.embed_query(chunk)
            
            # Append the chunk and its embedding to the list
            chunk_embeddings.append({
                "text_chunk": chunk,
                "embedding": embedding
            })

        # Create a single MongoDB document (cluster) with an array of chunks and embeddings
        document_data = {
            "document_id": document_id,
            "file_name": pdf_file.filename,
            "pdf_id": pdf_id,
            "chunks_and_embeddings": chunk_embeddings
        }

        # Store the document in MongoDB
        try:
            collection.insert_one(document_data)
            print(f"Successfully stored document {document_id} in MongoDB")
            logging.info(f"Successfully stored document {document_id} in MongoDB")
        except Exception as e:
            print(f"Error storing document {document_id} in MongoDB: {e}")
            logging.error(f"Error storing document {document_id} in MongoDB: {traceback.format_exc()}")

    except errors.PyMongoError as e:
        logging.error(f"Error retrieving PDF from MongoDB GridFS: {e}")
        raise e

# FastAPI endpoint to process PDF from MongoDB GridFS by its ID
@app.post("/process-pdf/")
async def process_pdf(pdf_id: str):
    try:
        # Convert the string ID to an ObjectId and process the PDF
        from bson.objectid import ObjectId
        process_and_store_pdf_from_gridfs(ObjectId(pdf_id))
        return JSONResponse(status_code=200, content={"message": f"PDF {pdf_id} processed successfully."})
    
    except Exception as e:
        logging.error(f"Error processing PDF {pdf_id}: {e}")
        return JSONResponse(status_code=500, content={"message": f"Error processing PDF: {str(e)}"})


# Example usage
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
