import React, { Component } from 'react';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import Styless from '../../../components/header/react-awesome-button-master/src/styles/themes/theme-blue';



// Styles
import './contato.scss';





// Components

export default class Contato_Home extends Component {
    render() {
        return (
            <div className="contato-home-container">


                <div className="form-contato">

                    <form className="form-container">

                        <h1 className="title-form">Solicite o URA na sua escola</h1>
                        
                        
                        
                        <input
                            className="input-form-home"
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                        />

                        <input
                            className="input-form-home"
                            type="text"
                            name="email"
                            placeholder="Seu email"
                        />
                        <input
                            className="input-form-home"
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                        />
                        <input
                            className="input-form-home"
                            type="text"
                            name="telefone"
                            placeholder="Nome da escola"
                        />
                        <input
                            className="msg-form-home"
                            type="text"
                            name="mensagem"
                            placeholder="Mensagem"
                            
                        />
                        

                        <button type="submit" className="btn-enviar-form-home">Enviar</button>
                    </form>
                </div>



            </div>
        )
    }
}

