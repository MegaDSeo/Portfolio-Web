import React, { useState } from 'react';
import './Footer.css'
const Footer = () => {
    const [classOption, setClassOption] = useState('inicio')
    const handleSection = (seccion) => {
        setClassOption(seccion)
        document.getElementById(seccion).scrollIntoView({ behavior: "smooth" })
    }
    return (
        <>
            <footer>
                <div className="footer-contain">
                    <hr />
                    <div className="footer-info">
                        <p>© 2025 Walther Matute. Casi todos los derechos reservados</p>
                        <ul>
                            <li><a className={classOption === 'about' && 'active'} onClick={() => handleSection('about')}>Sobre mi</a></li>
                            <li><a className={classOption === 'proyectos' && 'active'} onClick={() => handleSection('proyectos')}>Proyectos</a></li>
                            <li><a className={classOption === 'habilidades' && 'active'} onClick={() => handleSection('habilidades')}>Habilidades</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer