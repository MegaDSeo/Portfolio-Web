import React from 'react';
import Perfil from '../../assets/perfil.png';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <section id='about'>
                <div className="about-contain">
                    <h1>Sobre <span>mi</span></h1>
                    <div className="about-p-image">
                        <img src={Perfil} alt="" />
                        <p>¡Hola! Soy Walther Jair Matute Garcia, tengo 20 años y me apasiona la tecnología, especialmente la programación en entornos front-end y backend. También me interesa la administración de sistemas operativos. Mi proceso de aprendizaje comenzó desde la secundaria, y actualmente estoy estudiando <span>Ingeniería en Tecnologías de la Información.</span> Me encanta seguir aprendiendo y aplicando mis conocimientos en proyectos que me permitan mejorar mis habilidades. Actualmente, me desempeño como <span>programador junior,</span> siempre buscando nuevos retos y oportunidades para crecer profesionalmente.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;