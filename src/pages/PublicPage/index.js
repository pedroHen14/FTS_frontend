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
} from "./styles";

import imageLogo from "../../assets/FTS.png";
import { FaUserAlt, FaWindows } from "react-icons/fa";
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
    if (document.documentElement.scrollTop > 350) {
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
      </Body>
    </Container>
  );
}

export default PublicPage;
