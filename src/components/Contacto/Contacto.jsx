import React from 'react';
import './Contacto.css'
import Enviar from '../../../src/assets/send-plane-fill.svg'
const Contacto = () => {
    return (
        <>
            <section id='contacto'>
                <div className="contact-contain">
                    <h1><span>Mi</span> contacto</h1>
                    <div className="form-animation">
                        <form>
                            <div className="form-contain">
                                <div className="form-names">
                                    <input type="text" placeholder='Nombre'/>
                                    <input type="text" placeholder='Apellido'/>
                                </div>
                                <div className="form-email">
                                    <input type="email" placeholder='Correo electrónico'/>
                                </div>
                                <div className="form-message">
                                    <textarea name="" id="" rows={12}></textarea>
                                </div>
                            </div>
                            <button className='btn' type='submit'><img src={Enviar}  alt="" />Enviar mensaje</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacto;