// src/components/Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Barra lateral</h2>
      <ul>
        <li className="mb-2">Opción 1</li>
        <li className="mb-2">Opción 2</li>
        <li>Opción 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
