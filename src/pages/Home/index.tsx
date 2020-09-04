import React from "react";

import { Container, Header, Content } from "./styles";

import Navbar from "../../components/NavBar";
import Layout from "../../components/Layout";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Layout>
          <Navbar />
        </Layout>
      </Header>
    </Container>
  );
};

export default Home;
