import React, { Component } from 'react';

import './style.css'

export default class FaleConosco extends Component {
    render() {
        return(  
                <form id="new-post">
                <h1 className="title">Ouvidoria</h1>

                <input
                    className="all"
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                />

                <input
                    className="all"
                    type="text"
                    name="email"
                    placeholder="Seu email"
                />
                <input
                    className="all"
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                />
                <input
                    className="msg"
                    type="text"
                    name="mensagem"
                    placeholder="Mensagem"
                    
                />

                <button type="submit">Enviar</button>
            </form>
        )
    }
}

