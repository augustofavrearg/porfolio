// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <section>
          <h1>Contenido Principal</h1>
          <p>Bienvenido a mi aplicación</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
