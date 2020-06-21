import React from 'react'

import { Container, Content } from './styles'

import logo from '../../assets/logo-ura.png'

import Button from '../Button'

const Header: React.FC = () => {
  return <Container>
    <Content>
      <nav>
        <img src={logo} alt="logo do URA" />

      </nav>
      <aside>
        <Button>Aulas</Button>
        <Button>Artigos</Button>
        <Button>Nóticias</Button>
        <Button>Contato</Button>

      </aside>
    </Content>
  </Container>
}

export default Header
