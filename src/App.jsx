import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import './App.css'



function App() {


  return (
    <>
      <BrowserRouter>
      {/* Aquí podéis poner un Navbar que se vea en todas las páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
