import React from 'react';
import Contruction from '../../../src/assets/construction.svg'
import './Proyectos.css'
const Proyectos = () => {
    return (
        <>
            <section id='proyectos'>
                <div className="projets-contain">
                    <h1>Mis <span>Proyectos</span></h1>
                </div>
                {/* <div className="projects-contain">
                    <div className="card">
                        <div className="overlay">
                            <img src="" alt="" />
                        </div>
                        <div className="card-tecnologys">

                        </div>
                        <div className="card-paragraf">
                            <p></p>
                        </div>
                        <button>Ver Proyecto</button>
                    </div>
                </div> */}
                <img src={Contruction} alt="" />
            </section>
        </>
    )
}

export default Proyectos;