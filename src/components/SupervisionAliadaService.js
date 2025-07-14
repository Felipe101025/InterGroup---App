import React from 'react';

const SupervisionAliadaService = () => {
  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Supervisión Aliada</h2>
        <p className="text-lg text-gray-700 mb-8">
          Servicio exclusivo para empresas de seguridad que no cuenten con personal de supervisión. InterGroup ofrece el alquiler de supervisores capacitados para este fin.
        </p>
        <div className="space-y-4">
          <a 
            href="tel:+573001234567"
            className="block bg-red-700 text-white py-3 px-8 rounded-xl hover:bg-red-800 transition-colors text-lg font-semibold shadow-lg"
          >
            Llamar a Dirección Comercial
          </a>
          <a 
            href="https://wa.me/573001234567"
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-green-600 text-white py-3 px-8 rounded-xl hover:bg-green-700 transition-colors text-lg font-semibold shadow-lg"
          >
            Enviar WhatsApp
          </a>
          <button
            onClick={() => alert('Formulario de contacto con Dirección Comercial (simulado)')}
            className="block bg-gray-700 text-white py-3 px-8 rounded-xl hover:bg-gray-800 transition-colors text-lg font-semibold shadow-lg"
          >
            Formulario de Contacto
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupervisionAliadaService;