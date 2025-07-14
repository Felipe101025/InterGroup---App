import React from 'react';

const EscoltaVipService = ({ onContactAdvisor }) => {
  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Servicio de Escolta VIP</h2>
        <p className="text-lg text-gray-700 mb-8">
          Servicio de escolta premium de la más alta calidad en atención y prevención de incidentes. Incluye manejo preventivo de riesgos, acompañamiento personalizado y logística avanzada.
        </p>
        <button
          onClick={onContactAdvisor}
          className="bg-red-700 text-white py-3 px-8 rounded-xl hover:bg-red-800 transition-colors text-lg font-semibold shadow-lg"
        >
          Contactar Asesora Comercial
        </button>
      </div>
    </section>
  );
};

export default EscoltaVipService;