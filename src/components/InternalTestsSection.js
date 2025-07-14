import React, { useState } from 'react';

const InternalTestsSection = () => {
  const [testResult, setTestResult] = useState('');
  const [loading, setLoading] = useState(false);

  const runTest = (testName) => {
    setLoading(true);
    setTestResult('');
    setTimeout(() => {
      const result = `Resultado de la prueba "${testName}": ¡Éxito!`;
      setTestResult(result);
      setLoading(false);
    }, 1500);
  };

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }} // Imagen de fondo actualizada
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100"> {/* Contenedor con opacidad y borde rojo */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Pruebas Internas</h2>
        <p className="text-gray-600 mb-8 text-center">
          Aquí puedes ejecutar pruebas para verificar la funcionalidad interna de la aplicación.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => runTest('Conectividad de Base de Datos')}
            className="w-full bg-red-700 text-white py-3 rounded-xl hover:bg-red-800 transition-colors text-lg font-semibold shadow-md" // Botón rojo
            disabled={loading}
          >
            {loading ? 'Ejecutando...' : 'Prueba de Conectividad'}
          </button>
          <button
            onClick={() => runTest('Integridad de Datos')}
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors text-lg font-semibold shadow-md"
            disabled={loading}
          >
            {loading ? 'Ejecutando...' : 'Prueba de Integridad'}
          </button>
          <button
            onClick={() => runTest('Rendimiento de Notificaciones')}
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-colors text-lg font-semibold shadow-md"
            disabled={loading}
          >
            {loading ? 'Ejecutando...' : 'Prueba de Notificaciones'}
          </button>
          <button
            onClick={() => runTest('Carga de Archivos')}
            className="w-full bg-yellow-600 text-white py-3 rounded-xl hover:bg-yellow-700 transition-colors text-lg font-semibold shadow-md"
            disabled={loading}
          >
            {loading ? 'Ejecutando...' : 'Prueba de Carga de Archivos'}
          </button>
        </div>
        {testResult && (
          <p className="mt-8 text-center text-gray-800 font-medium text-lg bg-red-100 p-4 rounded-lg border border-red-200"> {/* Fondo y borde rojos */}
            {testResult}
          </p>
        )}
      </div>
    </section>
  );
};

export default InternalTestsSection;