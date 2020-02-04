import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { GlobalStyles } from './Global';
import { theme } from './Theme';

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
