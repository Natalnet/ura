import React, { useEffect, useState } from 'react'

import { Container, Content } from './styles'

import logo from '../../assets/logo-ura.png'

import Button from '../Button'

const Header: React.FC = () => {
  const [scroolNumber, setScroolNumber] = useState(0)
  useEffect(() => {
    setScroolNumber(window.scrollY)
    console.log(scroolNumber)
  }, [scroolNumber])
  return <Container>
    <Content scrool={scroolNumber} >
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
