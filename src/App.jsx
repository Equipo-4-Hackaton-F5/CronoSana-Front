import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css'



function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<div>Formulario Añadir Medicamento (próximamente)</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;