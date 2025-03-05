import React from 'react';
import Avatar from '../../assets/avatar.png'
import CV from '../../assets/CV Walther.pdf'
import GitHub from '../../assets/github-violet.svg'
import Linkedin from '../../assets/linkedin-violet.svg'
import File from '../../assets/file-violet.svg'
import './Inicio.css'
const Inicio = () => {
    return (
        <>
            <main id='inicio'>
                <div className="main-max-contain">
                    <div className="contain">
                        <h1><span>Walther</span> Matute</h1>
                        <h3>Programador Junior</h3>
                        <p>Apasionado por construir experiencias web interactivas y fáciles de usar. Me enfoco en crear interfaces visualmente atractivas y funcionales, utilizando las tecnologías más modernas para ofrecer soluciones efectivas</p>
                        <div className="main-social">
                            <a href={CV} download="CV Walther"> <img src={File} alt="" /> Descargar CV </a>
                            <a href="https://www.linkedin.com/in/walther-garcia-42a9a32ab/" target='_blank'> <img src={Linkedin} alt="" /> Linkedin</a>
                            <a href="https://github.com/MegaDSeo" target='_blank'> <img src={GitHub} alt="" /> Github</a>
                        </div>
                    </div>
                    <div className="main-overlay">
                        <img className='avatar' src={Avatar} alt="" />
                        <div className="overlay"></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Inicio;