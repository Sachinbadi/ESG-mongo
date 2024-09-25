import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <div className="rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500 custom-spin"></div>
    </div>
  );
};

export default Loader;
