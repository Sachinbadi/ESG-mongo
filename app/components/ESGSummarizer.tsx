'use client';  // Add this line at the top of the file

import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { GlobalWorkerOptions, version as pdfjsVersion } from 'pdfjs-dist';

// Set worker path to CDN
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

// Custom implementation of Promise.withResolvers()
function withResolvers() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

// Use the custom withResolvers function instead of Promise.withResolvers()
const { promise, resolve, reject } = withResolvers();

export default function ESGSummarizer() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const onDocumentLoadError = (error) => {
    console.error('Error while loading document! ', error);
    setError(`Failed to load PDF: ${error.message}. Please try again with a different file.`);
  };

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          ESG Summarizer 🌿
        </h1>
        
        <div className="mb-8 text-center">
          <p className="text-lg mb-4 text-gray-700">Upload PDF</p>
          <label htmlFor="pdf-upload" className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Choose File
          </label>
          <input
            type="file"
            id="pdf-upload"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {file && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">PDF Preview</h2>
            <div className="border rounded-lg overflow-hidden">
              <Document 
                file={file} 
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                error={<div>An error occurred while loading the PDF!</div>}
              >
                <Page pageNumber={pageNumber} width={600} />
              </Document>
            </div>
            {numPages && (
              <p className="mt-2 text-sm text-gray-600">
                Page {pageNumber} of {numPages}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}