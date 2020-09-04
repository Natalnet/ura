import styled from "styled-components";

import Background from "../../assets/home-background.png";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${Background}) no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;
