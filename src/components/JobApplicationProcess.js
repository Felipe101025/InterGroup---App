import React, { useState } from 'react';

const JobApplicationProcess = ({ position, onBack }) => {
  const [step, setStep] = useState('requirements');
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [omtContact, setOmtContact] = useState({ email: '', idNumber: '' });
  const [uploadedFiles, setUploadedFiles] = useState({
    hojaDeVida: null,
    cursoSeguridad: null,
    cedula: null,
    ultimaCartaLaboral: null,
  });

  const questions = {
    vigilante: [
      { id: 'q1', text: '¿Tiene experiencia mínima de 1 año en seguridad en el sector seleccionado?', type: 'boolean' },
      { id: 'q2', text: '¿Tiene el curso de vigilancia vigente?', type: 'boolean' },
      { id: 'q3', text: '¿Considera tener actitud de servicio y presentación personal adecuada?', type: 'boolean' },
    ],
    escoltas: [
      { id: 'q1', text: '¿Cuenta con mínimo 2 años de experiencia como escolta?', type: 'boolean' },
      { id: 'q2', text: '¿Posee el curso de escolta vigente?', type: 'boolean' },
      { id: 'q3', text: '¿Ha trabajado en al menos uno de estos contextos: VIP, transporte de valores o escolta tienda a tienda?', type: 'boolean' },
    ],
    supervisor: [
      { id: 'q1', text: '¿Tiene mínimo 2 años de experiencia en supervisión operativa o vigilancia motorizada?', type: 'boolean' },
      { id: 'q2', text: '¿Cuenta con curso de vigilancia o supervisión actualizado?', type: 'boolean' },
      { id: 'q3', text: '¿Ha tenido personal a cargo previamente?', type: 'boolean' },
    ],
    omt: [
      { id: 'q1', text: '¿Tiene experiencia mínima de 1 año en operación de medios tecnológicos o central de monitoreo?', type: 'boolean' },
      { id: 'q2', text: '¿Tiene habilidades en manejo de sistemas y escucha activa?', type: 'boolean' },
      { id: 'q3', text: '¿Ha liderado o coordinado personal en entornos operativos?', type: 'boolean' },
    ],
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmitQuestionnaire = () => {
    const currentQuestions = questions[position.id];
    const allTrue = currentQuestions.every(q => answers[q.id] === 'true');

    if (allTrue) {
      if (position.id === 'omt') {
        setStep('omtContact');
      } else {
        setStep('uploadDocuments');
      }
    } else {
      setResult('rejected');
    }
  };

  const handleOmtContactChange = (e) => {
    const { name, value } = e.target;
    setOmtContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleOmtContactSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de contacto OMT:', omtContact);
    alert('¡Datos enviados! Ahora serás redirigido a PsicoAlianza.');
    window.open('https://www.psicoalianza.com/', '_blank');
    onBack();
  };

  const handleFileChange = (e, fileType) => {
    setUploadedFiles((prev) => ({ ...prev, [fileType]: e.target.files[0] }));
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    console.log('Archivos a subir:', uploadedFiles);
    setResult('approved');
  };

  if (!position) {
    return (
      <section className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}>
        <div className="max-w-md w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100 text-center">
          <p className="text-lg text-gray-700">Por favor, selecciona una posición para postularte.</p>
          <button onClick={onBack} className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
            Volver a Vacantes
          </button>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Postulación para {position.title}</h2>

        {step === 'requirements' && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Requisitos Generales:</h3>
            <p className="text-gray-700 mb-4">{position.requirements}</p>
            <p className="text-gray-700 mb-6">
              Si cumples con estos requisitos, haz clic en "Continuar" para responder un breve cuestionario.
            </p>
            <div className="flex justify-between">
              <button onClick={onBack} className="bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
                Volver a Vacantes
              </button>
              <button onClick={() => setStep('questionnaire')} className="bg-red-700 text-white py-2 px-4 rounded-xl hover:bg-red-800 transition-colors">
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 'questionnaire' && result === null && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cuestionario de Perfil:</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmitQuestionnaire(); }} className="space-y-6">
              {questions[position.id].map((q) => (
                <div key={q.id}>
                  <p className="text-gray-700 font-medium mb-2">{q.text}</p>
                  {q.type === 'boolean' && (
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={q.id}
                          value="true"
                          checked={answers[q.id] === 'true'}
                          onChange={() => handleAnswerChange(q.id, 'true')}
                          className="form-radio text-red-600 h-5 w-5"
                        />
                        <span className="ml-2 text-gray-700">Sí</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name={q.id}
                          value="false"
                          checked={answers[q.id] === 'false'}
                          onChange={() => handleAnswerChange(q.id, 'false')}
                          className="form-radio text-red-600 h-5 w-5"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex justify-end">
                <button type="submit" className="bg-red-700 text-white py-2 px-4 rounded-xl hover:bg-red-800 transition-colors">
                  Enviar Respuestas
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'omtContact' && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">¡Felicidades! Tu perfil OMT es ideal.</h3>
            <p className="text-lg text-gray-700 mb-6">
              Para continuar con el proceso de selección, por favor ingresa tu correo electrónico y número de cédula.
              Serás redirigido a la página de PsicoAlianza para iniciar tus pruebas psicotécnicas.
            </p>
            <form onSubmit={handleOmtContactSubmit} className="space-y-4 max-w-sm mx-auto">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={omtContact.email}
                  onChange={handleOmtContactChange}
                  className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Cédula
                </label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={omtContact.idNumber}
                  onChange={handleOmtContactChange}
                  className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-red-700 text-white py-2 rounded-xl hover:bg-red-800 transition-colors font-semibold">
                Continuar a PsicoAlianza
              </button>
            </form>
            <button onClick={onBack} className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
              Volver a Vacantes
            </button>
          </div>
        )}

        {step === 'uploadDocuments' && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Carga de Documentos</h3>
            <p className="text-lg text-gray-700 mb-6">
              ¡Felicidades! Tu perfil se ajusta a los requisitos de la posición de {position.title}. Por favor, sube los siguientes documentos para continuar con tu postulación.
            </p>
            <form onSubmit={handleUploadSubmit} className="space-y-4 max-w-sm mx-auto">
              <div>
                <label htmlFor="hojaDeVida" className="block text-sm font-medium text-gray-700 mb-1">
                  Hoja de Vida
                </label>
                <input
                  type="file"
                  id="hojaDeVida"
                  name="hojaDeVida"
                  onChange={(e) => handleFileChange(e, 'hojaDeVida')}
                  className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  required
                />
                {uploadedFiles.hojaDeVida && <p className="text-xs text-gray-500 mt-1">Archivo cargado: {uploadedFiles.hojaDeVida.name}</p>}
              </div>
              <div>
                <label htmlFor="cursoSeguridad" className="block text-sm font-medium text-gray-700 mb-1">
                  Curso de Seguridad
                </label>
                <input
                  type="file"
                  id="cursoSeguridad"
                  name="cursoSeguridad"
                  onChange={(e) => handleFileChange(e, 'cursoSeguridad')}
                  className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  required
                />
                {uploadedFiles.cursoSeguridad && <p className="text-xs text-gray-500 mt-1">Archivo cargado: {uploadedFiles.cursoSeguridad.name}</p>}
              </div>
              <div>
                <label htmlFor="cedula" className="block text-sm font-medium text-gray-700 mb-1">
                  Cédula
                </label>
                <input
                  type="file"
                  id="cedula"
                  name="cedula"
                  onChange={(e) => handleFileChange(e, 'cedula')}
                  className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  required
                />
                {uploadedFiles.cedula && <p className="text-xs text-gray-500 mt-1">Archivo cargado: {uploadedFiles.cedula.name}</p>}
              </div>
              <div>
                <label htmlFor="ultimaCartaLaboral" className="block text-sm font-medium text-gray-700 mb-1">
                  Última Carta Laboral
                </label>
                <input
                  type="file"
                  id="ultimaCartaLaboral"
                  name="ultimaCartaLaboral"
                  onChange={(e) => handleFileChange(e, 'ultimaCartaLaboral')}
                  className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                  required
                />
                {uploadedFiles.ultimaCartaLaboral && <p className="text-xs text-gray-500 mt-1">Archivo cargado: {uploadedFiles.ultimaCartaLaboral.name}</p>}
              </div>
              <button type="submit" className="w-full bg-red-700 text-white py-2 rounded-xl hover:bg-red-800 transition-colors font-semibold">
                Enviar Postulación
              </button>
            </form>
            <button onClick={onBack} className="mt-6 bg-gray-700 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
              Volver a Vacantes
            </button>
          </div>
        )}

        {result === 'approved' && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">¡Postulación Enviada!</h3>
            <p className="text-lg text-gray-700 mb-6">
              Hemos recibido tu postulación para la posición de {position.title}. Nos pondremos en contacto contigo pronto.
            </p>
            <button onClick={onBack} className="bg-red-700 text-white py-2 px-4 rounded-xl hover:bg-red-800 transition-colors">
              Volver a Vacantes
            </button>
          </div>
        )}

        {result === 'rejected' && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Lo sentimos...</h3>
            <p className="text-lg text-gray-700 mb-6">
              Tu perfil no cumple con todos los requisitos para la posición de {position.title} en este momento. Te invitamos a revisar otras vacantes.
            </p>
            <button onClick={onBack} className="bg-red-700 text-white py-2 px-4 rounded-xl hover:bg-red-800 transition-colors">
              Volver a Vacantes
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobApplicationProcess;