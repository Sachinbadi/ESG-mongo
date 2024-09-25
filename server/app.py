import os
import logging
import uuid
import time
import asyncio
import aiohttp
import pdfplumber
from dotenv import load_dotenv
from langchain.text_splitter import RecursiveCharacterTextSplitter
from pymongo import MongoClient, errors
from gridfs import GridFS
import google.generativeai as genai
import key_param
import traceback
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from bson.objectid import ObjectId
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
class CustomEmbedding:
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
    async def aembed_query(self, text):
        # This is a placeholder. Implement actual async embedding if possible.
        return self.embed_query(text)
def get_pdf_text(pdf_file):
    text = ""
    with pdfplumber.open(pdf_file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text
def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=512,
        chunk_overlap=50
    )
    chunks = text_splitter.split_text(text)
    return chunks
async def generate_embedding(chunk, custom_embeddings):
    embedding = await custom_embeddings.aembed_query(chunk)
    return {"text_chunk": chunk, "embedding": embedding}
async def process_and_store_pdf_from_gridfs(pdf_id):
    try:
        start_time = time.time()
        # Load the PDF from MongoDB GridFS
        pdf_file = fs.get(pdf_id)
        pdf_load_time = time.time() - start_time
        logging.info(f"Time to load PDF from GridFS: {pdf_load_time:.2f} seconds")
        # Extract text from PDF
        text_extraction_start = time.time()
        raw_text = get_pdf_text(pdf_file)
        text_extraction_time = time.time() - text_extraction_start
        logging.info(f"Time to extract text from PDF: {text_extraction_time:.2f} seconds")
        # Split text into chunks
        chunk_start = time.time()
        text_chunks = get_text_chunks(raw_text)
        chunk_time = time.time() - chunk_start
        logging.info(f"Time to split text into chunks: {chunk_time:.2f} seconds")
        logging.info(f"Text extracted and split into chunks for PDF ID {pdf_id}")
        # Generate a unique ID for the PDF document (cluster ID)
        document_id = str(uuid.uuid4())
        # Initialize custom embeddings
        custom_embeddings = CustomEmbedding()
        # Generate embeddings asynchronously
        embedding_start = time.time()
        tasks = [generate_embedding(chunk, custom_embeddings) for chunk in text_chunks]
        chunk_embeddings = await asyncio.gather(*tasks)
        embedding_time = time.time() - embedding_start
        logging.info(f"Time to generate embeddings: {embedding_time:.2f} seconds")
        # Create a single MongoDB document (cluster) with an array of chunks and embeddings
        document_data = {
            "document_id": document_id,
            "file_name": pdf_file.filename,
            "pdf_id": pdf_id,
            "chunks_and_embeddings": chunk_embeddings
        }
        # Store the document in MongoDB
        try:
            store_start = time.time()
            collection.insert_one(document_data)
            store_time = time.time() - store_start
            logging.info(f"Time to store document in MongoDB: {store_time:.2f} seconds")
            logging.info(f"Successfully stored document {document_id} in MongoDB")
        except Exception as e:
            logging.error(f"Error storing document {document_id} in MongoDB: {traceback.format_exc()}")
        total_time = time.time() - start_time
        logging.info(f"Total processing time: {total_time:.2f} seconds")
    except errors.PyMongoError as e:
        logging.error(f"Error retrieving PDF from MongoDB GridFS: {e}")
        raise e
@app.post("/upload-and-process-pdf/")
async def upload_and_process_pdf(file: UploadFile = File(...)):
    try:
        start_time = time.time()
        # Store the uploaded PDF in GridFS
        pdf_content = await file.read()
        store_start = time.time()
        pdf_id = fs.put(pdf_content, filename=file.filename)
        store_time = time.time() - store_start
        logging.info(f"Time to store PDF in GridFS: {store_time:.2f} seconds")
        logging.info(f"Stored PDF {file.filename} in MongoDB with ID {pdf_id}")
        # Process the stored PDF asynchronously
        process_start = time.time()
        await process_and_store_pdf_from_gridfs(pdf_id)
        process_time = time.time() - process_start
        logging.info(f"Time to process and store PDF: {process_time:.2f} seconds")
        total_time = time.time() - start_time
        logging.info(f"Total API call time: {total_time:.2f} seconds")
        return JSONResponse(status_code=200, content={
            "message": "PDF uploaded and processed successfully.",
            "pdf_id": str(pdf_id),
            "processing_time": f"{total_time:.2f} seconds"
        })
    except Exception as e:
        logging.error(f"Error uploading or processing PDF: {e}")
        print(traceback.format_exc())
        return JSONResponse(status_code=500, content={
            "message": f"Error uploading or processing PDF: {str(e)}"
        })
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)