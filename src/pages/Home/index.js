import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import { Body, Container } from "./styles";
import { getUser, signOut } from "../../services/security";
import { useHistory } from "react-router";
import { useState } from "react";
import { api } from "../../services/api";
import { useEffect } from "react";

function Home() {
  const history = useHistory();

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  return (
    <Container>
      <NavigationMenu image={imgLogo} handleSignOut={() => handleSignOut()} />
      <Body>
        <h1>Seja bem-vindo ao nosso sistema de gerenciamento comercial</h1>
      </Body>
    </Container>
  );
}

export default Home;
