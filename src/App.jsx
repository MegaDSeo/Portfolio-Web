import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav/Nav'
import Inicio from './components/Inicio/Inicio'
import Proyectos from './components/Proyectos/Proyectos'
import Habilidades from './components/Habilidades/Habilidades'
import Testimonios from './components/Testimonios/Testimonios'
import Contacto from './components/Contacto/Contacto'
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/proyectos' element={<Proyectos />}/>
          <Route path='/habilidades' element={<Habilidades />}/>
          <Route path='/testimonios' element={<Testimonios />}/>
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
