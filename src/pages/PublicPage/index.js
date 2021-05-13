import React from "react";

import {
  Container,
  DescriptionContainer,
  Header,
  IconUser,
  ImageContainer,
  MenuContainer,
  WelcomeContainer,
} from "./styles";

import imageLogo from "../../assets/FTS.png";
import vector from "../../assets/vector.svg";
import { FaUserAlt } from "react-icons/fa";

function PublicPage() {
  return (
    <Container>
      <Header>
        <ImageContainer>
          <img src={imageLogo} alt="logo" />
        </ImageContainer>
        <MenuContainer>
          <h3>Home</h3>
          <h3>Planos</h3>
          <h3>Valores</h3>
        </MenuContainer>
        <IconUser>
          <FaUserAlt />
        </IconUser>
      </Header>
      <WelcomeContainer>
        <div></div>
      </WelcomeContainer>
      <DescriptionContainer>
        <img src={vector} alt="vetor" />
      </DescriptionContainer>
    </Container>
  );
}

export default PublicPage;
