import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import Services from '../pages/Services';
import Footer from './Footer';
import Contact from '../pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<Services />} />
        <Route path="/kontakt" element={<Contact />} />
        {/* Weitere Routen hier */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
