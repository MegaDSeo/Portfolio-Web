import React, { useState } from 'react';
import logoNav from '../../assets/logo.png';
import Bar from '../../../src/assets/menu.svg'
import Close from '../../../src/assets/close.svg'
import './Nav.css'

const Nav = () => {
	const [classOption, setClassOption] = useState('inicio')
	const handleSection = (seccion) => {
		setClassOption(seccion)
		document.getElementById(seccion).scrollIntoView({ behavior: "smooth" })
		setMenuOpen(false);
	}
	window.addEventListener('scroll', () => {
		if (window.scrollY > 24) {
			document.querySelector('nav').style.backgroundColor = '#312f2f'
			document.querySelector('nav').style.backdropFilter = 'blur(10px)'
		} else if (window.scrollY === 0) {
			document.querySelector('nav').style.backgroundColor = '#1c1b1b'

		}

	})
	const [menuOpen, setMenuOpen] = useState(false);
	console.log(menuOpen);
	
	return (
		<>
			<nav>
				<div className="nav-max-contain">
					<div className="nav-img">
						<img  src={logoNav} alt="" />
					</div>
					<ul className={`menu ${menuOpen === true ? "open": "cerrar"}`}>
						<img src={Close} className='close' onClick={() => setMenuOpen(false)} alt="" />
						<li><a className={classOption === 'inicio' ? 'active' : ''} onClick={() => handleSection('inicio')}>Inicio</a></li>
						<li><a className={classOption === 'about' ? 'active' : ''} onClick={() => handleSection('about')}>Sobre mi</a></li>
						<li><a className={classOption === 'proyectos' ? 'active' : ''} onClick={() => handleSection('proyectos')}>Proyectos</a></li>
						<li><a className={classOption === 'habilidades' ? 'active' : ''} onClick={() => handleSection('habilidades')}>Habilidades</a></li>
						<li><a className={classOption === 'contacto' ? 'active' : ''} onClick={() => handleSection('contacto')}>Contacto</a></li>
					</ul>
					<img  src={Bar} className='bar' onClick={() => setMenuOpen(true)} alt="" />
				</div>
			</nav>
		</>
	)
};

export default Nav;