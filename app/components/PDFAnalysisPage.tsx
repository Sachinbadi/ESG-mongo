import React, { useState, useEffect } from 'react';
import AnalysisForm from './AnalysisForm';
import TalkToPDF from './TalkToPDF';
import { motion } from 'framer-motion';

interface PDFAnalysisPageProps {
  pdfName: string;
  pdfId: string;
}

const PDFAnalysisPage: React.FC<PDFAnalysisPageProps> = ({ pdfName, pdfId }) => {
  const [showAnalysisForm, setShowAnalysisForm] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  useEffect(() => {
    const storedSummary = localStorage.getItem('pdfSummary');
    if (storedSummary) {
      setSummary(storedSummary);
    }
  }, []);

  const handleGenerateSummary = () => {
    setShowAnalysisForm(true);
  };

  const handleAnalysisFormSubmit = (formData: { [key: string]: string }) => {
    console.log(formData);
    // TODO: Implement actual summary generation based on form data
    const newSummary = "This is a placeholder summary based on the submitted form data.";
    setSummary(newSummary);
    localStorage.setItem('pdfSummary', newSummary);
    setShowAnalysisForm(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <motion.div 
        className="w-full md:w-1/2 p-6 overflow-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">PDF Analysis: {pdfName}</h2>
          <button
            onClick={handleGenerateSummary}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-6"
          >
            Generate Summary
          </button>
          {summary && (
            <motion.div 
              className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Summary</h3>
              <p className="text-gray-600 leading-relaxed text-justify" style={{ lineHeight: '1.15' }}>
                {summary}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 p-6 bg-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold  text-gray-800">👋 Talk to PDF</h2>
        <TalkToPDF onClose={() => {}} />
      </motion.div>

      {showAnalysisForm && (
        <AnalysisForm
          questions={[
            { id: 'question1', text: 'What is the company\'s carbon footprint?' },
            { id: 'question2', text: 'How does the company handle waste management?' },
            { id: 'question3', text: 'What are the company\'s diversity and inclusion policies?' },
          ]}
          onSubmit={handleAnalysisFormSubmit}
          onClose={() => setShowAnalysisForm(false)}
        />
      )}
    </div>
  );
};

export default PDFAnalysisPage;

