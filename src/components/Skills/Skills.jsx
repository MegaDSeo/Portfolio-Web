import React from 'react';
import './Skills.css'
import HTML from '../../../src/assets/HTML.png'
import CSS from '../../../src/assets/CSS.png'
import Bootstrap from '../../../src/assets/Bootstrap.png'
import Js from '../../../src/assets/JavaScript.png'
import Rct from '../../../src/assets/react.svg'
import Pytn from '../../../src/assets/Python.png'
import TS from '../../../src/assets/ts.webp'
import C from '../../assets/C.png'
import Angular from '../../../src/assets/Angular.png'
import Java from '../../../src/assets/Java.png'
const Skills = () => { 
    return (    
        <>
            <section id='habilidades'>
                <div className="skills-contain">
                    <h1><span>Mis</span> Habilidades</h1>
                    <div className="skills-tecnology">
                        <div className="skills-html">
                            <img src={HTML} alt="" />
                            <h3>HTML</h3>
                        </div>
                        <div className="skills-css">
                            <img src={CSS} alt="" />
                            <h3>CSS</h3>
                        </div>
                        <div className="skills-bttp">
                            <img src={Bootstrap} alt="" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="skills-js">
                            <img src={Js} alt="" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="skills-react">
                            <img src={Rct} alt="" />
                            <h3>React Js</h3>
                        </div>
                        <div className="skills-python">
                            <img src={Pytn} alt="" />
                            <h3>Python</h3>
                        </div>
                        <div className="skills-ts">
                            <img src={TS} alt="" />
                            <h3>TypeScript</h3>
                        </div>
                        <div className="skills-c">
                            <img src={C} alt="" />
                            <h3>C++</h3>
                        </div>
                        <div className="skills-angular">
                            <img src={Angular} alt="" />
                            <h3>Angular</h3>
                        </div>
                        <div className="skills-java">
                            <img src={Java} alt="" />
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;