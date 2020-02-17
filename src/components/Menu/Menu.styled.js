import background from "../../img/scholae_background.png";
//Menu.styled.js
import styled from "styled-components";
// Menu -> index.js
export { default } from "./Menu";

// eslint-disable-next-line import/first
export const StyledMenu = styled.nav`
  img {
    height: 15vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.primaryLight};
  max-height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${background});
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 0;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
