import React, { useState } from 'react';

import logoNav from '../../assets/logo.png' ;
import './Nav.css'

const Nav = () => {
	const [classOption, setClassOption] = useState('inicio')
	const handleSection = (seccion) =>{
		setClassOption(seccion)
		document.getElementById(seccion).scrollIntoView({behavior: "smooth"})
	}
	window.addEventListener('scroll', () =>{
		if(window.scrollY > 24){
			document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, 0.802)'
			document.querySelector('nav').style.backdropFilter = 'blur(10px)'
		}else if(window.scrollY === 0){
			document.querySelector('nav').style.backgroundColor = '#bddcfd'
		}
		
	})
     return(
        <>
	   	<nav>
			<div className="nav-max-contain">
				<div className="nav-img">
					<img src={logoNav} alt="" />
				</div>
				<ul>
					<li><a className={classOption === 'inicio' ? 'active' : '' && 'active'} onClick={() => handleSection('inicio')}>Inicio</a></li>
					<li><a className={classOption === 'about' ? 'active' : '' && 'active'} onClick={() => handleSection('about')}>Sobre mi</a></li>
					<li><a className={classOption === 'proyectos' ? 'active' : ''} onClick={() => handleSection('proyectos')}>Proyectos</a></li>
					<li><a className={classOption === 'habilidades' ? 'active' : ''} onClick={() => handleSection('habilidades')}>Habilidades</a></li>
					<li><a className={classOption === 'testimonios' ? 'active' : ''} onClick={() => handleSection('testimonios')}>Testimonios</a></li>
					<li><a className={classOption === 'contacto' ? 'active' : ''} onClick={() => handleSection('contacto')}>Contacto</a></li>
				</ul>
			</div>
		</nav>
        </>
     )
};

export default Nav;