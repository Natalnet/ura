import React from "react";

import { Container } from "./styles";

import Navbar from "../../components/NavBar";
import Layout from "../../components/Layout";

const Home: React.FC = () => {
  return (
    <Container>
      <Layout>
        <Navbar />
      </Layout>
    </Container>
  );
};

export default Home;
