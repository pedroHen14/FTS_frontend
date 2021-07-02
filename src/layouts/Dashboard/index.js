import React from "react";
import NavigationMenu from "../../components/NavigationMenu";
import imageLogo from "../../assets/FTS.png";

import { Container, Header, Content, Body, Footer } from "./styles";

function Dashboard({ title, children }) {
  return (
    <Container>
      <NavigationMenu image={imageLogo} />
      <Content>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <p>Flow Trading System | 2021</p>
        </Footer>
      </Content>
    </Container>
  );
}

export default Dashboard;
