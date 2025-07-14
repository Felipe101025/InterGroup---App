import React from 'react';

const FloatingActionButton = ({ onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 bg-red-700 text-white p-4 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center z-30"
      title={label}
    >
      {icon}
    </button>
  );
};

export default FloatingActionButton;