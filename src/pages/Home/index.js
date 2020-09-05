import React from "react";
import { Link } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { FiLogIn } from "react-icons/fi";

import {
  Container,
  Header,
  Content,
  LadingPageInfo,
  IconsWrapper,
  CardInfo,
  SlideWrapper,
  LadingPageMain,
} from "./styles";

import Navbar from "../../components/NavBar";
import Layout from "../../components/Layout";

import school from "../../assets/school.svg";
import study from "../../assets/study.svg";
import training from "../../assets/training.svg";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import logo from "../../assets/logo.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Home() {
  return (
    <Container>
      <Header>
        <Layout>
          <Navbar />
        </Layout>
      </Header>

      <Content>
        <LadingPageInfo>
          <SlideWrapper>
            <AutoplaySlider
              bullets={false}
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={5000}
            >
              <div data-src={slider1} />
              <div data-src={slider2} />
              <div data-src={slider3} />
            </AutoplaySlider>
          </SlideWrapper>
          <IconsWrapper>
            <CardInfo>
              <img src={school} alt="Escola" />
              <strong>4 escolas participantes</strong>
            </CardInfo>
            <CardInfo>
              <img src={study} alt="Estudar" />
              <strong>+ de 1000 alunos inpactados</strong>
            </CardInfo>
            <CardInfo>
              <img src={training} alt="Treinamento" />
              <strong>+ de 20 aulas e podcasts online</strong>
            </CardInfo>
          </IconsWrapper>
        </LadingPageInfo>

        <LadingPageMain>
          <img src={logo} alt="logo do Um robô por aluno" />
          <strong>Levando a robótica de baixo custo para todos</strong>
          <Link to="/materiais">
            Conheça nossos materiais <FiLogIn size={20} color="#fff" />{" "}
          </Link>
        </LadingPageMain>
      </Content>
    </Container>
  );
}

export default Home;
