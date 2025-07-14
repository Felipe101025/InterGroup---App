import React, { useState } from 'react';

const AdvisorChatModal = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'advisor', text: '¡Hola! Soy tu asesora en línea de Intergroup. ¿En qué puedo ayudarte hoy?' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = { id: Date.now(), sender: 'user', text: message.trim() };
      setChatHistory((prev) => [...prev, newMessage]);
      setMessage('');

      setTimeout(() => {
        const advisorResponse = {
          id: Date.now() + 1,
          sender: 'advisor',
          text: 'Gracias por tu mensaje. Un momento por favor, estoy revisando tu consulta.',
        };
        setChatHistory((prev) => [...prev, advisorResponse]);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg h-[80vh] flex flex-col relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Asesora en Línea</h2>
        <div className="flex-grow overflow-y-auto p-4 bg-red-50 rounded-xl mb-4 border border-red-100">
          {chatHistory.map((msg) => (
            <div
              key={msg.id}
              className={`mb-3 p-3 rounded-lg max-w-[80%] ${
                msg.sender === 'user'
                  ? 'bg-red-600 text-white ml-auto rounded-br-none'
                  : 'bg-gray-200 text-gray-800 mr-auto rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="flex-grow px-4 py-2 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700 transition"
          />
          <button
            type="submit"
            className="bg-red-700 text-white py-2 px-5 rounded-xl hover:bg-red-800 transition-colors font-semibold shadow-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvisorChatModal;