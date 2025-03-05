import React from 'react';
import Avatar from '../../assets/avatar.jpg'
import CV from '../../assets/CV Walther.pdf'
import GitHub from '../../assets/github-blue.svg'
import Linkedin from '../../assets/linkedin-blue.svg'
import File from '../../assets/file-blue.svg'
import './Inicio.css'
const Inicio = () => {
    return (
        <>
            <main>
                <div className="main-max-contain">
                    <img src={Avatar} alt="" />
                    <h1>Walther Matute</h1>
                    <h3>Frontend Developer</h3>
                    <p>Apasionado por construir experiencias web interactivas y fáciles de usar. Me enfoco en crear interfaces visualmente atractivas y funcionales, utilizando las tecnologías más modernas para ofrecer soluciones efectivas</p>
                    <div className="main-social">
                        <a href={CV} download="CV Walther"> <img src={File} alt="" /> Descargar CV </a>
                        <a href="https://www.linkedin.com/in/walther-garcia-42a9a32ab/" target='_blank'> <img src={Linkedin} alt="" /> Linkedin</a>
                        <a href="https://github.com/MegaDSeo" target='_blank'> <img src={GitHub} alt="" /> Github</a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Inicio;