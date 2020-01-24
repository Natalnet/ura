import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { AwesomeButton} from 'react-awesome-button';
// eslint-disable-next-line no-unused-vars
import Styless from '../../../components/header/react-awesome-button-master/src/styles/themes/theme-blue';

// Styles

import './quem_somos.scss';


// Images
import Image from '../../../img/metodologia-f.png'



export default class QuemSomos extends Component {
    render() {
        return (
            <div className="container-quem-somos">

                <div className="container-image">
                    <img src={Image} className="image" alt="Integrantes do Um Robô por aluno"></img>
                </div>

                <div className="container-text">
                    <h1 className="title-text">Quem Somos</h1>
                    <p>Aplicamos oficinas em que os estudantes desenvolvem suas capacidades
                        intelectuais de forma prática e interdisciplinar. Nossa metodologia 
                        está alinhada às competências da BNCC, logo, formamos os nossos alunos
                        com pensamentos críticos e disruptivos impactando o mundo e a sociedade
                        com suas criações.</p>
                    <Link to="/ura/quem-somos" className="button-text" ><AwesomeButton type="primary" size="large">Saiba Mais</AwesomeButton> </Link>
                </div>

                

            </div>
        )
    }
}