import React, { useState } from 'react';
import api from '../../../services/api';

// Styles
import './contato.scss';

// Components

export default function Contato_Home() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

      function formSubmit(e) {
        e.preventDefault()

         api.post('/send-email', {
            email: email,
	        nome: nome,
	        mensagem: mensagem
            
        });

        alert('Mensagem enviada, entraremos em contato em breve!');

    }
    
        return (
            <div className="contato-home-container">


                <div className="form-contato">
                    <div className="form-title-container-home">
                        <h1 className="title-form">Solicite o URA na sua escola!</h1>
                    </div>
                    
                    <form className="form-container" onSubmit={formSubmit}>

                        <input
                            className="input-form-home"
                            type="text"
                            name="email"
                            placeholder="Seu email"
                            onChange={e => setEmail(e.target.value)}
                            required
                        />

                        <input
                            className="input-form-home"
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            required
                            onChange={e => setNome(e.target.value)}
                        />

                        
                        
                        <input
                            className="msg-form-home"
                            type="text"
                            name="mensagem"
                            placeholder="Mensagem"
                            onChange={e => setMensagem(e.target.value)}
                            required
                        />
                        

                        <button type="submit" className="btn-enviar-form-home">Enviar</button>
                    </form>
                </div>



            </div>
        )
    }


