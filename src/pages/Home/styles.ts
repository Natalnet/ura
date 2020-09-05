import styled from "styled-components";

import Background from "../../assets/home-background.png";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${Background}) no-repeat;
  background-size: cover;
  padding: 0 85px;
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
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
`;

export const LadingPageInfo = styled.aside`
  width: 1000px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideWrapper = styled.div`
  display: flex;
  width: 1000px;
  margin-bottom: 26px;
`;

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 150px;
    width: 150px;
    color: #efeeef;
    margin-bottom: 12px;
  }

  strong {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #efeeef;
  }
`;

export const LadingPageMain = styled.div`
  padding: 0 150px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 332px;
    height: 237.56px;
  }

  strong {
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    color: #efffef;
  }

  a {
    width: 380px;
    height: 50px;
    border-radius: 25px;
    background: #d35dcf;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 12px;
    }
  }
`;
