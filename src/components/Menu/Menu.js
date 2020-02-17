// Menu.js
import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

// Styles
// eslint-disable-next-line no-unused-vars
import buttonStyle from "../header/react-awesome-button-master/src/styles/themes/theme-blue/index";

// Media

import logo from "../../img/logo-ura.png";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} className="side-bar-menu">
      <Link to="/ura">
        <img src={logo} alt="logotipo do ura" onClick={() => setOpen(!open)} />
      </Link>

      <Link to="/ura/quem-somos" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Quem Somos
        </AwesomeButton>
      </Link>

      <Link to="/ura/tutoriais" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Tutoriais
        </AwesomeButton>
      </Link>

      <Link to="/ura/metologia" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Metologia
        </AwesomeButton>
      </Link>

      <Link to="/ura/contato" onClick={() => setOpen(!open)}>
        <AwesomeButton type="primary" size="large">
          Contato
        </AwesomeButton>
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
