// src/components/Navbar.js

import React from 'react';


const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <ul className="flex">
        <li className="mr-6"><a href="/" className="hover:underline">Inicio</a></li>
        <li className="mr-6"><a href="/acerca" className="hover:underline">Acerca</a></li>
        <li><a href="/contacto" className="hover:underline">Contacto</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
