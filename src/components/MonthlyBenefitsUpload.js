import React, { useState } from 'react';

const MonthlyBenefitsUpload = ({ onBack }) => {
  const [uploadedFiles, setUploadedFiles] = useState({
    becaUniversitaria: null,
    soat: null,
    medicinaPrepagada: null,
  });

  const handleFileChange = (e, fileType) => {
    setUploadedFiles((prev) => ({ ...prev, [fileType]: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Archivos de beneficios a subir:', uploadedFiles);
    alert('Documentos de beneficios enviados con éxito.');
    onBack();
  };

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Documentos Mensuales de Beneficios</h2>
        <p className="text-lg text-gray-600 mb-10">
          Por favor, carga los soportes para tus beneficios mensuales.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div>
            <label htmlFor="becaUniversitaria" className="block text-sm font-medium text-gray-700 mb-1">
              Beca Universitaria (Soporte de promedio académico)
            </label>
            <input
              type="file"
              id="becaUniversitaria"
              name="becaUniversitaria"
              onChange={(e) => handleFileChange(e, 'becaUniversitaria')}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              required
            />
            {uploadedFiles.becaUniversitaria && <p className="text-xs text-gray-500 mt-1">Archivo cargado: {uploadedFiles.becaUniversitaria.name}</p>}
          </div>
          <div>
            <label htmlFor="soat" className="block text-sm font-medium text-gray-700 mb-1">
              SOAT (Soporte de pago vigente)
            </label>
            <input
              type="file"
              id="soat"
              name="soat"
              onChange={(e) => handleFileChange(e, 'soat')}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              required
            />
            {uploadedFiles.soat && <p className="text-xs text-gray-500 mt-1">Archivo cargado: {uploadedFiles.soat.name}</p>}
          </div>
          <div>
            <label htmlFor="medicinaPrepagada" className="block text-sm font-medium text-gray-700 mb-1">
              Medicina Prepagada (Certificado de pago del plan)
            </label>
            <input
              type="file"
              id="medicinaPrepagada"
              name="medicinaPrepagada"
              onChange={(e) => handleFileChange(e, 'medicinaPrepagada')}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              required
            />
            {uploadedFiles.medicinaPrepagada && <p className="text-xs text-gray-500 mt-1">Archivo cargado: {uploadedFiles.medicinaPrepagada.name}</p>}
          </div>
          <button type="submit" className="w-full bg-red-700 text-white py-3 rounded-xl hover:bg-red-800 transition-colors font-semibold">
            Enviar Documentos
          </button>
        </form>
        <button onClick={onBack} className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
          Volver
        </button>
      </div>
    </section>
  );
};

export default MonthlyBenefitsUpload;