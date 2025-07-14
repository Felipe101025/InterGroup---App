import React, { useState } from 'react';

const ElectronicSecurityService = ({ onContactAdvisor }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-4xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Seguridad Electrónica</h2>
        
        <div className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nuestros Servicios Incluyen:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto max-w-md">
            <li>Monitoreo CCTV 24/7</li>
            <li>Monitoreo de alarmas con respaldo redundante</li>
            <li>Instalación de cámaras y sensores inteligentes</li>
            <li>Vigilancia aérea con drones regulados por la Aeronáutica Civil</li>
          </ul>
        </div>

        <div className="mb-8">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <span className="ml-2 text-gray-700 text-sm">
              Acepto la política de tratamiento de datos personales y uso de la información.
            </span>
          </label>
        </div>

        <button
          onClick={onContactAdvisor}
          disabled={!acceptedTerms}
          className={`py-3 px-8 rounded-xl text-lg font-semibold shadow-lg transition-colors ${
            acceptedTerms ? 'bg-red-700 text-white hover:bg-red-800' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          Contactar Asesora Comercial
        </button>
      </div>
    </section>
  );
};

export default ElectronicSecurityService;