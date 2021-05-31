import React from "react";

import {
  Body,
  Container,
  DescriptionContainer,
  TriangleBottom,
  TriangleTop,
  Header,
  IconUser,
  ImageContainer,
  MenuContainer,
  WelcomeContainer,
  MvvContainer,
  MvvHeader,
  MvvContent,
} from "./styles";

import imageLogo from "../../assets/FTS.png";
import { FaUserAlt, FaWindows } from "react-icons/fa";
import { BiBarcodeReader, BiDollarCircle, BiStar } from "react-icons/bi";
import Lottie from "react-lottie";
import animationData from "../../assets/business_2.json";
import { Grow, Slide } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

function PublicPage() {
  const [checked, setChecked] = useState(false);
  const [ch, setCh] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 500);
  }, []);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 500) {
      setCh(true);
    } else setCh(false);
  };

  window.onscroll = () => {
    handleScroll();
  };

  const lottieBusinessOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Header>
        <ImageContainer>
          <img src={imageLogo} alt="logo" />
        </ImageContainer>
        <MenuContainer>
          <h2>Home</h2>
          <h2>Planos</h2>
          <h2>Valores</h2>
        </MenuContainer>
        <IconUser>
          <FaUserAlt />
        </IconUser>
      </Header>
      <Body>
        <WelcomeContainer>
          <Lottie options={lottieBusinessOptions} width={700} height={700} />
          <Slide direction="left" in={checked} timeout={1000}>
            <div>
              <h2>Seja bem-vindo,</h2>
              <h1>Venha conosco revolucionar o seu negócio</h1>
            </div>
          </Slide>
        </WelcomeContainer>
        <TriangleTop />
        <DescriptionContainer>
          <Grow in={ch} timeout={1000}>
            <p>
              A Flow Tranding System é uma empresa que foi criada visando
              estabelecer praticidade no dia a dia de comerciantes que não
              aderiram a um sistema de gestão informatizado e, por isso, acabam
              por ter um desempenho inferior. De modo geral, além de um sistema
              web de gerenciamento intuitivo e composto por diversas
              ferramentas, os clientes podem contar com a versão mobile e ainda
              um site próprio para a divulgação de seu comércio, podendo ter um
              alcance de público muito maior.
            </p>
          </Grow>
        </DescriptionContainer>
        <TriangleBottom />
        <MvvContainer>
          <MvvHeader>
            <h1>
              Veja no que o <strong>FTS</strong> pode ajudar sua empresa
            </h1>
          </MvvHeader>
          <MvvContent>
            <div className="mvv-container-card">
              <div className="mvv-card">
                <BiBarcodeReader size="100px" color="var(--dark)" />
                <p>
                  Temos um sistema de vendas rápidas pelo celular do seu
                  vendedor, melhorando e priorizando o atendimento rápido ao
                  cliente sem filas para atrapalhar
                </p>
              </div>
              <div className="mvv-card">
                <BiStar size="100px" color="var(--dark)" />
                <p>
                  Se você adquirir o nosso plano premium, terá acesso a um site
                  que iremos disponbilizar com todos os produtos da sua loja
                  disponíveis para o cliente visualizar
                </p>
              </div>
              <div className="mvv-card">
                <BiDollarCircle size="100px" color="var(--dark)" />
                <p>
                  Vamos trazer a tecnologia para o seu negócio, será uma grande
                  evolução em questão de produtividade e também financeira
                </p>
              </div>
            </div>
          </MvvContent>
        </MvvContainer>
        <div style={{ width: "100%", height: "400px" }}></div>
      </Body>
    </Container>
  );
}

export default PublicPage;
