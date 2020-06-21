import React from 'react'

import Header from './components/Header'

import Routes from './routes'

import './global.scss'

const App: React.FC = () => {
  return <>
    <Header />
    <Routes />
  </>
}

export default App
