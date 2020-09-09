import React, { useRef, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
import CountUp from "react-countup";

import Navbar from "../../components/NavBar";
import Layout from "../../components/Layout";

import logo from "../../assets/logo.png";
import ideaImg from "../../assets/idea.png";
import lampImg from "../../assets/lamp.png";
import smileImg from "../../assets/smile.png";
import studyImg from "../../assets/study.svg";
import trainingImg from "../../assets/training.svg";
import enterpriseLogo from "../../assets/school.svg";
import filogin from "../../assets/filogin.svg";

import {
  Container,
  Header,
  LadingPage,
  EnterpriseInfo,
  Card,
  EnterpriseAbout,
  Footer,
  FooterCard,
  SocialContent,
  SocialButton,
} from "./styles";

const itemAnimationUpY = {
  hidden: { x: 0, y: 100, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemAnimationDownY = {
  hidden: { x: 0, y: -200, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemAnimationLeftX = {
  hidden: { x: 200, y: 0, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemAnimationRightX = {
  hidden: { x: -100, y: 0, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const Home: React.FC = () => {
  const linkButtonRef = useRef<HTMLAnchorElement>(null);
  const [lastYPosition, setLatYPosition] = useState(0);
  const [scroolAnimate, setScroolAnimate] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setLatYPosition(window.scrollY);
      if (window.scrollY >= 255) {
        setScroolAnimate(true);
      }
    }
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scrool", handleScroll, false);
    };
  }, [lastYPosition]);

  const handleMaterial = useCallback(() => {
    linkButtonRef.current?.click();
  }, []);

  return (
    <Container>
      <Header>
        <Layout>
          <Navbar />
        </Layout>
      </Header>

      <LadingPage>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={itemAnimationDownY}
          src={logo}
          alt="Conecta Talentos"
        />
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={itemAnimationLeftX}
        >
          Conheça a robótica educacional <br /> de baixo custo!
        </motion.h1>
        <motion.hr
          initial="hidden"
          animate="visible"
          variants={itemAnimationRightX}
        />
        <motion.button
          type="button"
          initial="hidden"
          animate="visible"
          variants={itemAnimationUpY}
          whileHover={{
            width: 350,
          }}
          onClick={handleMaterial}
        >
          <Link ref={linkButtonRef} to="/materiais">
            Conheça nossos materiais
          </Link>
          <motion.img src={filogin} alt="materiais" />
        </motion.button>
      </LadingPage>

      <EnterpriseInfo>
        <Card variants={itemAnimationRightX} initial="hidden" animate="visible">
          <strong>Mudança de Pensamento</strong>
          <img src={lampImg} alt="Lâmpada criativa" />
          <p>
            oficinas em ambientes reais, possibilitando novas crenças e quebra
            de paradigmas.
          </p>
        </Card>
        <Card variants={itemAnimationUpY} initial="hidden" animate="visible">
          <strong>Ambientes de inovação</strong>
          <img src={ideaImg} alt="Felicidade" />
          <p>
            oficinas em ambientes reais, possibilitando novas crenças e quebra
            de paradigmas.
          </p>
        </Card>
        <Card variants={itemAnimationLeftX} initial="hidden" animate="visible">
          <strong>Competências emocionais</strong>
          <img src={smileImg} alt="Felicidade" />
          <p>
            oficinas em ambientes reais, possibilitando novas crenças e quebra
            de paradigmas.
          </p>
        </Card>
        {scroolAnimate && (
          <>
            <Card
              variants={{
                hidden: { x: 0, y: 100, opacity: 0 },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.3,
                    when: "beforeChildren",
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <strong>Posts frequentes</strong>
              <img src={studyImg} alt="Lendo um livro" />
              <p>
                Encontre mais de{" "}
                <strong>
                  <CountUp start={0} end={23} duration={5} />{" "}
                </strong>
                artigos sobré robótica
              </p>
            </Card>
            <Card
              variants={{
                hidden: { x: 0, y: 100, opacity: 0 },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    when: "beforeChildren",
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <strong>Treinamentos online</strong>
              <img src={trainingImg} alt="Felicidade" />
              <p>Se especialize na sua aŕea com nosso material</p>
            </Card>
            <Card
              variants={{
                hidden: { x: 0, y: 100, opacity: 0 },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.9,
                    when: "beforeChildren",
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <strong>Empresas do mercado</strong>
              <img src={enterpriseLogo} alt="Felicidade" />
              <p>
                Aqui você pode buscar vagas em startup's ou empresas do mercado
              </p>
            </Card>
          </>
        )}
      </EnterpriseInfo>

      <EnterpriseAbout>
        <motion.h1
          variants={itemAnimationUpY}
          initial="hidden"
          animate="visible"
        >
          Sobre
        </motion.h1>
        <motion.hr
          variants={itemAnimationUpY}
          initial="hidden"
          animate="visible"
        />
        <motion.p
          variants={itemAnimationUpY}
          initial="hidden"
          animate="visible"
        >
          Em um mundo cada vez mais competitivo, não basta ser qualificado para
          garantir a empregabilidade e nem basta ser empreendedor para assegurar
          uma equipe competente. Nesse cenário, necessidades e oportunidades
          constituem dois elos presentes simultaneamente entre os interesses dos
          envolvidos: quem busca trabalho e quem precisa de profissionais
          capacitados. A plataforma digital Conecta Talentos nasceu a partir
          dessa compreensão da realidade. Nossa função social, portanto, tem
          como objetivo promover a conexão entre as partes interessadas e,
          assim, potencializar o processo de inserção do mercado de trabalho.
        </motion.p>
      </EnterpriseAbout>

      <Footer>
        <FooterCard
          variants={itemAnimationUpY}
          initial="hidden"
          animate="visible"
        >
          <strong>Localidade</strong>
          <aside>
            <p>Natal, RN</p>
          </aside>
        </FooterCard>

        <FooterCard
          variants={itemAnimationUpY}
          initial="hidden"
          animate="visible"
        >
          <strong>Fale conoco</strong>
          <SocialContent>
            <SocialButton>
              <FiFacebook size={25} color="#584e30" />
            </SocialButton>

            <SocialButton>
              <FiInstagram size={25} color="#584e30" />
            </SocialButton>

            <SocialButton>
              <FiMail size={25} color="#584e30" />
            </SocialButton>
          </SocialContent>
        </FooterCard>

        <FooterCard
          variants={itemAnimationUpY}
          initial="hidden"
          animate="visible"
        >
          <strong>Equipe</strong>
          <aside>
            <p>Lana</p>
            <p>Pedro</p>
          </aside>
        </FooterCard>
      </Footer>
    </Container>
  );
};

export default Home;
