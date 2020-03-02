import React from "react";

// Styles
import "./quem-somos.scss";
import { QuemSomoss } from "./styled.quem-somos";
import AutoplaySlider from "../../pages/home/carousel/react-awesome-slider/src/hoc/autoplay/index";
import AwesomeSliderStyle from "../../pages/home/carousel/react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import "../../pages/home/carousel/react-awesome-slider/src/styles";

// Media

export default function QuemSomos() {
  return (
    <>
      <QuemSomoss>
        <div className="quem-somos-main-containerr">
          <div className="carousel-quem-somosss"></div>

          <div className="quem-somos-main-text">
            <p className="quem-somos-text-par">
              Ter um robô. Um sonho que está próximo de se tornar realidade para
              alunos de todo o Brasil. De baixíssimo custo, a estrutura será
              montada pelos próprios estudantes, que poderão usar o dispositivo
              para auxiliá-los no estudo de outras disciplinas curriculares. A
              iniciativa é dos pesquisadores do Laboratório NatalNet da
              Universidade Federal do Rio Grande do Norte (UFRN), que têm o
              objetivo de utilizar a robótica educacional para difundir o
              interesse por tecnologia em todos os níveis de ensino no País.{" "}
              <br /> <br />A presente proposta tem como objetivo desenvolver uma
              ação integrada que contemple o ensino, pesquisa e principalmente a
              extensão de Robótica Educacional de Baixo custo integrado à
              educação pública. Com essa ação articularemos alunos
              universitários, alunos do ensino médio assim como professores
              universitários e de escolas públicas com o objetivo de difundir a
              robótica educacional no país. Utilizaremos um kit de robótica de
              baixíssimo custo, desenvolvido no âmbito do laboratório Natalnet
              junto com Laboratório de Automação e Robótica - ECT, em conjunto
              com um software educativo para ministrar oficinas de robótica
              educacional para alunos e professores. Estas oficinas cobriram a
              montagem do robô, passando pela sua programação e finalizando com
              o seu uso de robôs em temas multidisciplinares. <br /> <br />
              As atividades deste projeto estarão organizadas em oficinas
              temática com o objetivo de trazer o conteúdo de robótica para o
              dia a dia dos participantes do projeto.
            </p>
          </div>
        </div>
      </QuemSomoss>
    </>
  );
}
