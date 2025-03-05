import React from 'react';
import Nav from './components/Nav/Nav'
import Inicio from './components/Inicio/Inicio'
import About from './components/Sobre mi/About';
import Proyectos from './components/Proyectos/Proyectos'
import Habilidades from './components/Habilidades/Habilidades'
import Testimonios from './components/Testimonios/Testimonios'
import Contacto from './components/Contacto/Contacto'
import './App.css'
function App() {
  return (
    <>
        <Nav />
        <Inicio />
        <About />
        <Proyectos />
        <Habilidades />
        <Testimonios />
        <Contacto />
    </>
  )
}

export default App
