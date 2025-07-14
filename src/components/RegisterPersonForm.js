import React, { useState } from 'react';

const RegisterPersonForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', formData);
    setMessage('¡Persona registrada con éxito! Te mantendremos informado.');
    setFormData({ name: '', email: '', phone: '', company: '' });
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section 
      className="p-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0fgZUtp3c6iCVp94hHM5LR1QUayJxrzbk73XZ')" }}
    >
      <div className="max-w-2xl w-full bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl border border-red-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Registrar Nueva Persona</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Empresa (Opcional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-700 text-white py-3 rounded-xl hover:bg-red-800 transition-colors text-lg font-semibold shadow-lg"
          >
            Registrar
          </button>
        </form>
        {message && (
          <p className="mt-6 text-center text-green-600 font-medium">{message}</p>
        )}
      </div>
    </section>
  );
};

export default RegisterPersonForm;