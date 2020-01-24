import React, { Component } from 'react';
import { Link } from "react-router-dom";


// Styles 
import './footer.scss'

// Imagens
import Facebook from '../../img/facebook.png';
import Instagram from '../../img/twitter.png';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer-content">

                <div className="footer-text">

                    <p className="footer-para">© 2019 - 2020 - Um Robô por Aluno - Todos os Direitos Reservados.</p>
                    

                    <h1 className="footer-title">Siga nossas redes sociais</h1>

                    <div className="footer-logos">

                        <div className="facebook-content">
                            <Link to="https://facebook.com" className="link"><img alt="link para facebook do Um Robô por Aluno" src={Facebook} className="facebook-logo" /></Link>
                        </div>

                        <div className="facebook-content">
                           <Link to="https://twitter.com" className="link"  ><img alt="link para twitter do Um Robô por Aluno" src={Instagram} className="facebook-logo" /></Link>
                        </div>

                       

                    </div>
                    
                </div>

                    
                 

                
            </div>
        )
    }
}