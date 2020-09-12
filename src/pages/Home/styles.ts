import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 76px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const LadingPage = styled(motion.aside)`
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 0 30px;

  > img {
    width: 420px;
    height: 320px;
  }

  > h1 {
    color: #403b3b;
    text-transform: uppercase;
    font-size: 62px;
    margin-bottom: 8px;
    font-weight: bold;
    text-align: center;
  }

  > hr {
    border: 3px solid #403b3b;
    border-radius: 15px;
    width: 10%;
    margin-bottom: 42px;
  }

  > button {
    width: 330px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    background: #d35dcf;
    border-radius: 25px;

    &:hover {
      transition: background 0.2s;
      background: #1953e6;

      > img {
        transition: opacity 0.2s;
        opacity: 1;
      }

      > a {
        transition: margin-right 0.2s;
        margin-right: 12px;
        margin-left: 0px;
      }
    }

    > a {
      transition: margin-right 0.2s;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }

    > img {
      width: 25px;
      transition: opacity 0.2s;
      height: 25px;
      opacity: 0;
    }
  }
`;

export const EnterpriseInfo = styled(motion.ul)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 50px;
  background: #fff;
`;

export const Card = styled(motion.li)`
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;

  > strong {
    font-size: 26px;
    color: #403b3b;
    text-align: center;
  }

  > img {
    height: 150px;
    width: 150px;
    margin: 22px 0;
  }

  > p {
    text-align: center;
    color: #403b3b;
    font-size: 22px;
  }
`;

export const EnterpriseAbout = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px 255px;

  > h1 {
    color: #403b3b;
    font-size: 48px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 22px;
    letter-spacing: 3px;
  }

  > hr {
    border: 3px solid #403b3b;
    border-radius: 15px;
    width: 10%;
    margin-bottom: 42px;
  }

  > p {
    color: #403b3b;
    font-size: 26px;
    text-align: justify;
    letter-spacing: 3px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 50px 250px;
`;

export const FooterCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;

  > strong {
    color: #403b3b;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 32px;
  }

  > aside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > p {
      color: #403b3b;
      font-size: 20px;
    }
  }
`;

export const SocialContent = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SocialButton = styled(motion.a)`
  width: 42px;
  height: 42px;
  background: transparent;
  border: 2px solid #403b3b;
  border-radius: 50%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: #95a9c9;
  }
`;
