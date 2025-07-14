import React, { useState } from 'react';

const EscoltaPorHorasService = ({ onContactAdvisor }) => {
  const allEscoltas = [
    { id: 1, name: 'Águila', experience: 5, age: 32, height: '1.80m', weight: '80kg', specialty: 'VIP' },
    { id: 2, name: 'Fénix', experience: 8, age: 38, height: '1.75m', weight: '75kg', specialty: 'Transporte de Valores' },
    { id: 3, name: 'Titán', experience: 10, age: 45, height: '1.90m', weight: '95kg', specialty: 'VIP' },
    { id: 4, name: 'Sombra', experience: 6, age: 29, height: '1.70m', weight: '68kg', specialty: 'Tienda a Tienda' },
    { id: 5, name: 'Rayo', experience: 7, age: 35, height: '1.85m', weight: '88kg', specialty: 'Transporte de Valores' },
    { id: 6, name: 'Pantera', experience: 4, age: 28, height: '1.65m', weight: '60kg', specialty: 'Tienda a Tienda' },
  ];

  const [selectedEscolta, setSelectedEscolta] = useState(null);
  const [filterExperience, setFilterExperience] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');

  const filteredEscoltas = allEscoltas.filter(escolta => {
    const matchesExperience = filterExperience === '' || escolta.experience >= parseInt(filterExperience);
    const matchesSpecialty = filterSpecialty === '' || escolta.specialty === filterSpecialty;
    return matchesExperience && matchesSpecialty;
  });

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-5xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Escolta por Horas</h2>
        <p className="text-lg text-gray-600 mb-10">
          Selecciona el escolta que mejor se adapte a tus necesidades.
        </p>

        <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-full md:w-auto">
            <label htmlFor="experienceFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Experiencia mínima (años)
            </label>
            <select
              id="experienceFilter"
              value={filterExperience}
              onChange={(e) => setFilterExperience(e.target.value)}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
            >
              <option value="">Todas</option>
              <option value="1">1+</option>
              <option value="3">3+</option>
              <option value="5">5+</option>
              <option value="8">8+</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label htmlFor="specialtyFilter" className="block text-sm font-medium text-gray-700 mb-1">
              Especialidad
            </label>
            <select
              id="specialtyFilter"
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
            >
              <option value="">Todas</option>
              <option value="VIP">VIP</option>
              <option value="Tienda a Tienda">Tienda a Tienda</option>
              <option value="Transporte de Valores">Transporte de Valores</option>
            </select>
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-6 pb-4 px-2 -mx-2">
          {filteredEscoltas.length > 0 ? (
            filteredEscoltas.map((escolta) => (
              <div 
                key={escolta.id}
                onClick={() => setSelectedEscolta(escolta)}
                className={`flex-none w-64 bg-red-50 p-6 rounded-xl shadow-md border-2 ${
                  selectedEscolta && selectedEscolta.id === escolta.id ? 'border-red-700' : 'border-red-200'
                } hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{escolta.name}</h3>
                <p className="text-gray-700 text-left">
                  <span className="font-medium">Experiencia:</span> {escolta.experience} años<br/>
                  <span className="font-medium">Edad:</span> {escolta.age}<br/>
                  <span className="font-medium">Altura:</span> {escolta.height}<br/>
                  <span className="font-medium">Peso:</span> {escolta.weight}<br/>
                  <span className="font-medium">Especialidad:</span> {escolta.specialty}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 w-full text-center">No se encontraron escoltas con los filtros seleccionados.</p>
          )}
        </div>

        {selectedEscolta && (
          <div className="mt-10 p-6 bg-red-100 rounded-xl shadow-lg border border-red-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Has seleccionado a {selectedEscolta.name}</h3>
            <p className="text-lg text-gray-700 mb-6">
              Para confirmar y agendar el servicio con {selectedEscolta.name}, por favor contacta a nuestra asesora comercial.
            </p>
            <button
              onClick={onContactAdvisor}
              className="bg-red-700 text-white py-3 px-8 rounded-xl hover:bg-red-800 transition-colors text-lg font-semibold shadow-lg"
            >
              Contactar Asesora Comercial
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EscoltaPorHorasService;