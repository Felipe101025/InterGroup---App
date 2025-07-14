import React from 'react';

const EmployeeDashboard = ({ onSelectOption }) => {
  const options = [
    { id: 'cargaDocumentos', title: 'Carga de Documentos' },
    { id: 'capacitacionPreIngreso', title: 'Capacitación de Pre-Ingreso' },
    { id: 'beneficios', title: 'Beneficios' },
    { id: 'nomina', title: 'Nómina' },
    { id: 'reportes', title: 'Reportes' },
    { id: 'soporte', title: 'Soporte Interno' },
  ];

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-5xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Panel de Empleados</h2>
        <p className="text-lg text-gray-600 mb-10">
          Bienvenido al portal de colaboradores de Intergroup.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option) => (
            <div 
              key={option.id}
              onClick={() => onSelectOption(option.id)}
              className="bg-red-50 p-6 rounded-xl shadow-md border border-red-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{option.title}</h3>
              <p className="text-gray-700">
                {option.id === 'cargaDocumentos' && 'Sube tus documentos personales y laborales.'}
                {option.id === 'capacitacionPreIngreso' && 'Accede a los módulos de capacitación inicial.'}
                {option.id === 'beneficios' && 'Consulta y gestiona tus beneficios.'}
                {option.id === 'nomina' && 'Revisa tus recibos de nómina.'}
                {option.id === 'reportes' && 'Genera reportes de tu actividad.'}
                {option.id === 'soporte' && 'Obtén ayuda y soporte técnico.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeDashboard;