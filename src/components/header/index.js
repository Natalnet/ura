import React, { Component } from 'react' 
import { AwesomeButton } from 'react-awesome-button';
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Styless from './react-awesome-button-master/src/styles/themes/theme-blue/index';

import './header.scss'

import logo from '../../img/logo-ura.png'

export default class Header extends Component {
    render() {
        return (
                <header className="main-header">

                    <div className="header-content">

                        <div className="header-logo">
                            <Link to="/ura/" className="a-logo"><img src={logo} className="img-logo" alt=""></img></Link>
                        </div>

                        <nav className="main-nav">
                            <ul className="ul-nav">
                                <li><Link to="/ura/quem-somos"><AwesomeButton type="primary" size="medium"  >Quem Somos</AwesomeButton></Link></li>
                                <li><Link to="/ura/tutoriais"><AwesomeButton type="primary" size="medium" >Tutoriais</AwesomeButton></Link></li>
                                <li><Link to="/ura/noticiais"><AwesomeButton type="primary" size="medium" >Notíciais</AwesomeButton></Link></li>
                                <li><Link to="/ura/metologia"><AwesomeButton type="primary" size="medium" >Metologia</AwesomeButton></Link></li>
                                <li><Link to="/ura/contato"><AwesomeButton type="primary" size="medium" >Contato</AwesomeButton></Link></li>
                            </ul>
                        </nav>

                    </div>

                </header>    
        )
    }
}
