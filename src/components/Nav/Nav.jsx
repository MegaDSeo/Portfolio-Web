import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoNav from '../../assets/logo.png' ;
import './Nav.css'

const Nav = () => {
	const seccion = useLocation();
     return(
        <>
	   	<nav>
			<div className="nav-max-contain">
				<div className="nav-img">
					<img src={logoNav} alt="" />
				</div>
				<ul>
					<li className={seccion.pathname === '/' ? 'active' : ''} ><Link to="/">Inicio</Link></li>
					<li className={seccion.pathname === '/proyectos' ? 'active' : ''}><Link to="/proyectos">Proyectos</Link></li>
					<li className={seccion.pathname === '/habilidades' ? 'active' : ''}><Link to="habilidades">Habilidades</Link></li>
					<li className={seccion.pathname === '/testimonios' ? 'active' : ''}><Link to="/testimonios">Testimonios</Link></li>
					<li className={seccion.pathname === '/contacto' ? 'active' : ''}><Link to="/contacto">Contacto</Link></li>
				</ul>
			</div>
		</nav>
        </>
     )
};

export default Nav;