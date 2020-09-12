import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import logo from "../../assets/logo.png";
import fileft from "../../assets/fileft.png";

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

const Desenvolvimento: React.FC = () => {
  const linkButtonRef = useRef<HTMLAnchorElement>(null);

  const handleMaterial = useCallback(() => {
    linkButtonRef.current?.click();
  }, []);

  return (
    <Container>
      <motion.img
        src={logo}
        alt="Um robô por aluno"
        initial="hidden"
        animate="visible"
        variants={itemAnimationUpY}
      />
      <motion.h1 initial="hidden" animate="visible" variants={itemAnimationUpY}>
        Em Desenvolvimento
      </motion.h1>
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
        <motion.img src={fileft} alt="materiais" />
        <Link ref={linkButtonRef} to="/">
          Voltar para a home
        </Link>
      </motion.button>
    </Container>
  );
};

export default Desenvolvimento;
