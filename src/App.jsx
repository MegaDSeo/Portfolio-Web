import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav/Nav'
import Inicio from './components/Inicio/Inicio'
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/proyectos'/>
          <Route path='/habilidades'/>
          <Route path='/testimonios'/>
          <Route path='/contacto'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
