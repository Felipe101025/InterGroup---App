import React from 'react';

const FooterSection = () => {
  return (
    <footer className="w-full bg-gray-900 text-white p-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Intergroup Connect. Todos los derechos reservados.</p>
      <p className="mt-2">
        <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Política de Privacidad</a> | 
        <a href="#" className="text-gray-400 hover:text-white transition-colors mx-2">Términos de Servicio</a>
      </p>
    </footer>
  );
};

export default FooterSection;