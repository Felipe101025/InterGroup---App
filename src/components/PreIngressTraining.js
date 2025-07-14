import React from 'react';

const PreIngressTraining = ({ onSelectProfile, onBack }) => {
  const profiles = [
    { id: 'vigilantes', title: 'Vigilantes' },
    { id: 'escoltas', title: 'Escoltas' },
    { id: 'supervisores', title: 'Supervisores' },
    { id: 'omt', title: 'OMT' },
  ];

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-4xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Capacitación de Pre-Ingreso</h2>
        <p className="text-lg text-gray-600 mb-10">
          Selecciona tu perfil para acceder a los módulos de capacitación.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile) => (
            <div 
              key={profile.id}
              onClick={() => onSelectProfile(profile.id)}
              className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{profile.title}</h3>
            </div>
          ))}
        </div>
        <button onClick={onBack} className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
          Volver al Panel de Empleados
        </button>
      </div>
    </section>
  );
};

export default PreIngressTraining;