import React from 'react';

const HomeSection = ({ onLoginClick, onWorkWithUsClick, onEmployeeLoginClick }) => {
  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-4xl text-center bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Bienvenido a Intergroup Connect
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Mantente al día con las últimas novedades de Intergroup. Aquí podrás registrarte, acceder a información exclusiva y mucho más.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-red-100 w-full max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Acceso Clientes</h3>
            <p className="text-gray-600 mb-6">
              Descubre nuestras ofertas y el portafolio de seguridad privada.
            </p>
            <button
              onClick={onLoginClick}
              className="w-full bg-red-700 text-white py-3 rounded-xl hover:bg-red-800 transition-colors text-lg font-semibold shadow-lg"
            >
              Iniciar Sesión Clientes
            </button>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-red-100 w-full max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Únete a Nuestro Equipo</h3>
            <p className="text-gray-600 mb-6">
              Explora nuestras oportunidades laborales y forma parte de Intergroup.
            </p>
            <button
              onClick={onWorkWithUsClick}
              className="w-full bg-gray-700 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors text-lg font-semibold shadow-lg"
            >
              Trabaje con Nosotros
            </button>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-xl border border-red-100 w-full max-w-md mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Acceso Empleados</h3>
          <p className="text-gray-600 mb-6">
            Portal exclusivo para colaboradores de Intergroup.
          </p>
          <button
            onClick={onEmployeeLoginClick}
            className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition-colors text-lg font-semibold shadow-lg"
          >
            Iniciar Sesión Empleados
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;