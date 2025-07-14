import React, { useState } from 'react';

const VigilanteTrainingModules = ({ onBack }) => {
  const sectors = [
    { id: 'residencial', title: 'Sector Residencial' },
    { id: 'comercial', title: 'Sector Comercial' },
    { id: 'industrial', title: 'Sector Industrial' },
    { id: 'salud', title: 'Sector Salud' },
  ];

  const [selectedSector, setSelectedSector] = useState(null);
  const [completedModules, setCompletedModules] = useState({});
  const [evaluationPassed, setEvaluationPassed] = useState(false);

  const modules = {
    residencial: [
      { id: 'm1', title: 'Módulo 1: Protocolos de Acceso Residencial' },
      { id: 'm2', title: 'Módulo 2: Manejo de Emergencias en Conjuntos' },
      { id: 'm3', title: 'Módulo 3: Atención al Residente y Visitantes' },
    ],
    comercial: [
      { id: 'm1', title: 'Módulo 1: Seguridad en Establecimientos Comerciales' },
      { id: 'm2', title: 'Módulo 2: Prevención de Pérdidas y Robos' },
      { id: 'm3', title: 'Módulo 3: Manejo de Conflictos con Clientes' },
    ],
    industrial: [
      { id: 'm1', title: 'Módulo 1: Seguridad en Plantas Industriales' },
      { id: 'm2', title: 'Módulo 2: Control de Acceso y Perímetros' },
      { id: 'm3', title: 'Módulo 3: Normas de Seguridad y Salud Ocupacional' },
    ],
    salud: [
      { id: 'm1', title: 'Módulo 1: Seguridad en Entornos Hospitalarios' },
      { id: 'm2', title: 'Módulo 2: Manejo de Situaciones Críticas en Salud' },
      { id: 'm3', title: 'Módulo 3: Protección de Pacientes y Personal Médico' },
    ],
  };

  const handleModuleCompletion = (moduleId) => {
    setCompletedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  const handleEvaluation = () => {
    const allModulesCompleted = modules[selectedSector].every(mod => completedModules[mod.id]);
    if (allModulesCompleted && Math.random() > 0.5) {
      setEvaluationPassed(true);
      alert('¡Evaluación final aprobada! Has completado la capacitación.');
    } else {
      alert('Evaluación final no aprobada. Por favor, revisa los módulos e inténtalo de nuevo.');
    }
  };

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-4xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Capacitación Vigilantes</h2>
        <p className="text-lg text-gray-600 mb-10">
          Selecciona el sector para ver los módulos de capacitación.
        </p>

        {!selectedSector ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector) => (
              <div 
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{sector.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Módulos para {sectors.find(s => s.id === selectedSector).title}</h3>
            <div className="space-y-4 mb-8">
              {modules[selectedSector].map((module) => (
                <div key={module.id} className="bg-red-100 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-gray-800 font-medium">{module.title}</span>
                  <input
                    type="checkbox"
                    checked={completedModules[module.id] || false}
                    onChange={() => handleModuleCompletion(module.id)}
                    className="form-checkbox h-5 w-5 text-red-600"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleEvaluation}
              disabled={!modules[selectedSector].every(mod => completedModules[mod.id])}
              className={`py-3 px-8 rounded-xl text-lg font-semibold shadow-lg transition-colors ${
                modules[selectedSector].every(mod => completedModules[mod.id]) ? 'bg-red-700 text-white hover:bg-red-800' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              Realizar Evaluación Final
            </button>
            {evaluationPassed && (
              <p className="mt-4 text-green-600 font-semibold">¡Evaluación aprobada!</p>
            )}
            <button onClick={() => setSelectedSector(null)} className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors ml-4">
              Volver a Sectores
            </button>
          </div>
        )}

        <button onClick={onBack} className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
          Volver al Panel de Empleados
        </button>
      </div>
    </section>
  );
};

export default VigilanteTrainingModules;