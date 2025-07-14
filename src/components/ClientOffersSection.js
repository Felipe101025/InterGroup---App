import React from 'react';

const ClientOffersSection = ({ onContactAdvisor }) => {
  const securityPacks = [
    {
      name: 'Seguridad Física Premium',
      description: 'Vigilancia 24/7, personal altamente capacitado, rondas de seguridad y control de accesos.',
      features: ['Guardias armados/desarmados', 'Monitoreo en sitio', 'Patrullaje constante'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.757 1.125 5.224 2.937 7.078A11.999 11.999 0 0012 22c2.912 0 5.633-1.15 7.618-3.04A12.001 12.001 0 0022 12c0-2.757-1.125-5.224-2.937-7.078z" />
        </svg>
      ),
    },
    {
      name: 'Seguridad Electrónica Avanzada',
      description: 'Sistemas de alarma inteligentes, cámaras de vigilancia HD, control de acceso biométrico y monitoreo remoto.',
      features: ['CCTV con IA', 'Alarmas conectadas', 'Sensores de movimiento'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      name: 'Seguridad Móvil Integral',
      description: 'Protección para dispositivos móviles, detección de amenazas, cifrado de datos y recuperación de información.',
      features: ['Antivirus móvil', 'VPN segura', 'Borrado remoto de datos'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }} // Imagen de fondo actualizada
    >
      <div className="max-w-5xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100"> {/* Contenedor con opacidad y borde rojo */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nuestro Portafolio de Seguridad</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Descubre las soluciones de seguridad que Intergroup tiene para proteger lo que más te importa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {securityPacks.map((pack, index) => (
            <div key={index} className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 hover:shadow-lg transition-shadow duration-300"> {/* Fondo y borde rojos */}
              <div className="flex items-center justify-center mb-4">{pack.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{pack.name}</h3>
              <p className="text-gray-600 text-center mb-4">{pack.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-700 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* Icono de lista rojo */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Necesitas más información?</h3>
          <p className="text-gray-600 mb-6">
            Nuestras asesoras están listas para resolver todas tus dudas y ofrecerte una solución personalizada.
          </p>
          <button
            onClick={onContactAdvisor}
            className="bg-red-700 text-white py-3 px-8 rounded-xl hover:bg-red-800 transition-colors text-lg font-semibold shadow-lg" // Botón rojo
          >
            Contactar Asesora en Línea
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientOffersSection;