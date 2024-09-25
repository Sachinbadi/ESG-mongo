import React, { useState } from 'react';

interface Question {
  id: string;
  text: string;
}

interface AnalysisFormProps {
  questions: Question[];
  onSubmit: (formData: { [key: string]: string }) => void;
  onClose: () => void;
}

const AnalysisForm: React.FC<AnalysisFormProps> = ({ questions, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    questions.reduce((acc, question) => ({ ...acc, [question.id]: '' }), {})
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Analysis Questions</h2>
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <label htmlFor={question.id} className="block text-gray-700 text-sm font-bold mb-2">
                {question.text}
              </label>
              <input
                type="text"
                id={question.id}
                name={question.id}
                value={formData[question.id]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnalysisForm;
