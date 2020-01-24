import React from 'react';

// Styles
import './contato.scss';

// Components

export default function Contato_Home() {

    function formSubmit(e) {
        e.preventDefault()
        alert('Enviado com sucesso')
    }

    
        return (
            <div className="contato-home-container">


                <div className="form-contato">
                    <div className="form-title-container-home">
                        <h1 className="title-form">Solicite o URA na sua escola</h1>
                    </div>
                    

                    <form className="form-container" onSubmit={formSubmit}>

                        
                        
                        
                        
                        <input
                            className="input-form-home"
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            required
                        />

                        <input
                            className="input-form-home"
                            type="text"
                            name="email"
                            placeholder="Seu email"
                            required
                        />
                        <input
                            className="input-form-home"
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                            required
                        />
                        <input
                            className="input-form-home"
                            type="text"
                            name="telefone"
                            placeholder="Nome da escola"
                            required
                        />
                        <input
                            className="msg-form-home"
                            type="text"
                            name="mensagem"
                            placeholder="Mensagem"
                            required
                        />
                        

                        <button type="submit" className="btn-enviar-form-home">Enviar</button>
                    </form>
                </div>



            </div>
        )
    }


