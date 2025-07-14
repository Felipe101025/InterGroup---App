import React from 'react';

const ClientDashboard = ({ onSelectService }) => {
  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-4xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Bienvenido, Cliente</h2>
        <p className="text-lg text-gray-600 mb-10">
          Explora nuestros servicios de seguridad diseñados para ti.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            onClick={() => onSelectService('seguridadElectronica')}
            className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Seguridad Electrónica</h3>
            <p className="text-gray-700">
              Monitoreo avanzado, cámaras inteligentes y sistemas de alarma.
            </p>
          </div>
          <div 
            onClick={() => onSelectService('seguridadMobile')}
            className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Seguridad Mobile</h3>
            <p className="text-gray-700">
              Servicios de escolta y supervisión para tu protección personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDashboard;