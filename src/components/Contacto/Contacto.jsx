import React, { useState } from 'react';
import './Contacto.css'
import Enviar from '../../../src/assets/send-plane-fill.svg'
const Contacto = () => {
    const handleForm = (e) =>{
        
        e.preventDefault();
        // document.querySelectorAll('input').forEach(ipt =>{
        //     document.addEventListener('keyup', ()=>{
        //         if(ipt.value === ''){
        //             ipt.style.border = '3px solid #0076f4'
        //         }else if(ipt.value !== ''){
        //             ipt.style.border = 'none'
        //         }
        //     })
        // })
    }
    
    return (
        <>
            <section id='contacto'>
                <div className="contact-contain">
                    <h1><span>Mi</span> contacto</h1>
                    <div className="form-animation">
                        <form onSubmit={handleForm}>
                            <div className="form-contain">
                                <div className="form-names">
                                    <input type="text" placeholder='Nombre' name='nombre'/>
                                    <input type="text" placeholder='Apellido' name='apellido'/>
                                </div>
                                <div className="form-email">
                                    <input type="email" placeholder='Correo electrónico' name='email'/>
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