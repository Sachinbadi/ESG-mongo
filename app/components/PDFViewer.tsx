'use client';

import React, { useState } from 'react';

export function ESGIcon({ type }: { type: 'environmental' | 'social' | 'governance' }) {
  const iconClasses = "h-12 w-12 mb-2";
  const textClasses = "text-sm font-medium text-gray-600";

  switch (type) {
    case 'environmental':
      return (
        <div className="flex flex-col items-center">
          <svg className={`${iconClasses} text-green-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <span className={textClasses}>Environmental</span>
        </div>
      );
    case 'social':
      return (
        <div className="flex flex-col items-center">
          <svg className={`${iconClasses} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className={textClasses}>Social</span>
        </div>
      );
    case 'governance':
      return (
        <div className="flex flex-col items-center">
          <svg className={`${iconClasses} text-purple-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className={textClasses}>Governance</span>
        </div>
      );
  }
}

function ESGLoader() {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );
}

function PDFViewer() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSummaryButton, setShowSummaryButton] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const handleSubmit = async () => {
    if (pdfFile) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append('file', pdfFile);

        const response = await fetch('http://localhost:8000/upload-pdf/', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('PDF uploaded successfully. ID:', data.pdf_id);
        setShowSummaryButton(true);
      } catch (error) {
        console.error('Error uploading PDF:', error);
        alert('Failed to upload PDF. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please upload a PDF file before submitting.');
    }
  };

  const handleRemovePDF = () => {
    setPdfFile(null);
    setShowSummaryButton(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-semibold text-gray-800">ESG Report Analyzer</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-center space-x-8 mb-8">
              <ESGIcon type="environmental" />
              <ESGIcon type="social" />
              <ESGIcon type="governance" />
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Upload Your ESG Report
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Our AI-powered tool will analyze your ESG report and provide a comprehensive summary.
            </p>

            <div className="mb-8">
              <label 
                htmlFor="pdf-upload" 
                className="cursor-pointer flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 w-full"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                {pdfFile ? 'Change PDF' : 'Upload PDF'}
              </label>
              <input
                type="file"
                id="pdf-upload"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {pdfFile && (
              <div className="text-center mb-8 flex items-center justify-center">
                <p className="text-green-600 font-semibold mr-2">{pdfFile.name}</p>
                <button
                  onClick={handleRemovePDF}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  aria-label="Remove PDF"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            {pdfFile && (
              <button
                onClick={handleSubmit}
                className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
              >
                Submit for Analysis
              </button>
            )}

            {isLoading && <ESGLoader />}

            {showSummaryButton && (
              <button
                className="mt-8 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
              >
                Generate Summary
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-gray-500">© 2023 ESG Report Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PDFViewer;