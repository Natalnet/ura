import React, {  useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

// Components
import { useOnClickOutside } from '../../hooks';
import { theme } from '../../Theme';
import { GlobalStyles } from '../../Global';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';
import { AwesomeButton } from 'react-awesome-button';

// Styled
import './header.scss'

// eslint-disable-next-line no-unused-vars
import Styless from './react-awesome-button-master/src/styles/themes/theme-blue/index';

// Midia
import logo from '../../img/logo-ura.png'

export default function Header()  {
        const [open, setOpen] = useState(false);
        const node = useRef();
        useOnClickOutside(node, () => setOpen(false));
        return (
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyles />
                        <header className="main-header">

                            <div className="header-content">

                            <div ref={node}>
                                <Burger open={open} setOpen={setOpen} />
                                <Menu open={open} setOpen={setOpen} />
                            </div>

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
                    </>    
                </ThemeProvider>
        )
    
}