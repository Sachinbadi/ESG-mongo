import React, { useState, useEffect } from 'react';

interface TalkToPDFProps {
  onClose: () => void;
}

const TalkToPDF: React.FC<TalkToPDFProps> = ({ onClose }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pdfFilename, setPdfFilename] = useState('');
  const [talkToKnowledgeBase, setTalkToKnowledgeBase] = useState(false);

  useEffect(() => {
    // Retrieve the filename from local storage when the component mounts
    const storedFilename = localStorage.getItem('pdfFilename');
    if (storedFilename) {
      setPdfFilename(storedFilename);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/chat_with_pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          question, 
          source: talkToKnowledgeBase ? null : pdfFilename 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get answer');
      }

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error:', error);
      setAnswer('An error occurred while processing your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <main className="flex-grow overflow-auto ">
        {!answer && (
          <div className="text-center text-gray-500 mt-20">
            <p>Start a conversation and ask questions about the PDF.</p>
          </div>
        )}
        {answer && (
          <div className="mb-4">
            <p className="font-bold">Q: {question}</p>
            <p>A: {answer}</p>
          </div>
        )}
      </main>
      
      <footer className="p-5 mt-auto">
        <div className="flex items-center justify-start mb-4">
          <label className="flex items-center cursor-pointer">
            <span className="mr-2 text-sm">Talk to Knowledge Base</span>
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only" 
                checked={talkToKnowledgeBase}
                onChange={() => setTalkToKnowledgeBase(!talkToKnowledgeBase)}
              />
              <div className={`w-10 h-4 rounded-full shadow-inner ${talkToKnowledgeBase ? 'bg-green-400' : 'bg-gray-400'}`}></div>
              <div className={`absolute w-6 h-6 rounded-full shadow -left-1 -top-1 transition ${talkToKnowledgeBase ? 'transform translate-x-full bg-green-500' : 'bg-white'}`}></div>
            </div>
          </label>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <span className="transform rotate-90">➤</span>
          </button>
        </form>
      </footer>
    </div>
  );
};

export default TalkToPDF;
