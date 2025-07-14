import React from 'react';

const WorkWithUsSection = ({ onSelectPosition }) => {
  const jobPositions = [
    {
      id: 'vigilante',
      title: 'Vigilante',
      categories: ['Residencial', 'Comercial', 'Industrial', 'Salud'],
      requirements: 'Experiencia mínima 1 año en el sector elegido, curso de vigilancia actualizado, actitud de servicio y excelente presentación personal.',
    },
    {
      id: 'escoltas',
      title: 'Escoltas',
      categories: ['VIP', 'Tienda a Tienda', 'Transporte de Valores'],
      requirements: 'Experiencia mínima 2 años en cualquiera de los tres sectores, curso de escolta actualizado, actitud de servicio y excelente presentación.',
    },
    {
      id: 'supervisor',
      title: 'Supervisor',
      categories: ['Supervisor de Puesto', 'Supervisor Móvil', 'Vigilante Motorizado'],
      requirements: 'Experiencia mínima 2 años, curso actualizado, actitud de servicio y buena presentación.',
    },
    {
      id: 'omt',
      title: 'OMT (Operador de Medios Tecnológicos)',
      categories: ['Centralista', 'Operador de Medios Tecnológicos'],
      requirements: 'Manejo de sistemas, escucha activa, comunicación asertiva, mínimo 1 año de experiencia en manejo de personal.',
    },
  ];

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-6xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Trabaje con Nosotros</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          En Intergroup, buscamos talento comprometido con la seguridad y el servicio. ¡Explora nuestras vacantes!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobPositions.map((position) => (
            <div key={position.id} className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{position.title}</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Categorías:</span> {position.categories.join(', ')}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-medium">Requisitos:</span> {position.requirements}
              </p>
              <button 
                onClick={() => onSelectPosition(position)}
                className="w-full bg-red-700 text-white py-2 rounded-xl hover:bg-red-800 transition-colors font-semibold"
              >
                Postularme
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;