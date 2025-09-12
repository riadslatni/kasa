import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/Homepage';
import Logement from './pages/Logement/Logement';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logement/:id" element={<Logement />} />
        {/* Ajoute d'autres routes si besoin */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
