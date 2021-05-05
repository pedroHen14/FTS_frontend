import React from "react";

import { Container, Content, Footer, Header, Image } from "./styles";
import imageLogo from "../../assets/FTS.png";

function Pdv() {
  return (
    <Container>
      <Header>
        <Image src={imageLogo} />
      </Header>
      <Content></Content>
      <Footer></Footer>
    </Container>
  );
}

export default Pdv;
