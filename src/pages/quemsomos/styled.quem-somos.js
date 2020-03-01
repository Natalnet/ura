import styled from "styled-components";

// Media

import Background from "../../img/scholae_background2.png";

export const QuemSomoss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 1000px;
  width: 100%;

  background: rgb(97, 255, 145);

  background-image: url(${Background});
  background-repeat: no-repeat;
`;
