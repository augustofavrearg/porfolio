// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <Home/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
