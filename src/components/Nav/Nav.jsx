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
			document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, 0.66)'
			document.querySelector('nav').style.backdropFilter = 'blur(10px)'
		}else if(window.scrollY === 0){
			document.querySelector('nav').style.backgroundColor = '#1c1b1b'
			
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
					<li><a className={classOption === 'inicio' ? 'active' : ''} onClick={() => handleSection('inicio')}>Inicio</a></li>
					<li><a className={classOption === 'about' ? 'active' : '' } onClick={() => handleSection('about')}>Sobre mi</a></li>
					<li><a className={classOption === 'proyectos' ? 'active' : ''} onClick={() => handleSection('proyectos')}>Proyectos</a></li>
					<li><a className={classOption === 'habilidades' ? 'active' : ''} onClick={() => handleSection('habilidades')}>Habilidades</a></li>
				</ul>
			</div>
		</nav>
        </>
     )
};

export default Nav;