import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > img {
    width: 440px;
  }

  > h1 {
    color: #403b3b;
    text-transform: uppercase;
    font-size: 62px;
    margin-bottom: 8px;
    font-weight: bold;
    text-align: center;
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
        transition: margin-left 0.2s;
        margin-left: 12px;
        margin-right: 0px;
      }
    }

    > a {
      transition: margin-left 0.2s;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      margin-right: 20px;
    }

    > img {
      width: 25px;
      transition: opacity 0.2s;
      height: 25px;
      opacity: 0;
    }
  }
`;
