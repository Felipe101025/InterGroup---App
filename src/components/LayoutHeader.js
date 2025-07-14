import React from 'react';

const LayoutHeader = ({ onNavigate, currentPage }) => {
  const getButtonClasses = (page) =>
    `px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
      currentPage === page
        ? 'bg-red-700 text-white shadow-md'
        : 'text-gray-700 hover:bg-red-100'
    }`;

  return (
    <header className="w-full bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc04gyghIl007fmwyReAgKCraUIWzEDZ6on58JN" alt="Intergroup Logo" className="h-10 w-10 mr-3 rounded-full" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900">Intergroup Connect</h1>
          <p className="text-xs text-gray-600 mt-0.5">Tu seguridad, nuestra prioridad.</p>
        </div>
      </div>
      <nav className="flex space-x-2">
        <button onClick={() => onNavigate('home')} className={getButtonClasses('home')}>
          Inicio
        </button>
        <button onClick={() => onNavigate('register')} className={getButtonClasses('register')}>
          Registrar Persona
        </button>
      </nav>
    </header>
  );
};

export default LayoutHeader;