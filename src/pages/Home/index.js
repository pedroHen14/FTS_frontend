import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import { Body, Container } from "./styles";

function Home() {
  const teste = [
    { route: "/registerManager", name: "Cadastro gerente" },
    { route: "/registerUser", name: "Cadastro funcionário" },
  ];

  return (
    <Container>
      <NavigationMenu image={imgLogo} menuItens={teste} />
      <Body>
        <h1>Seja bem-vindo ao nosso sistema de gerenciamento comercial</h1>
      </Body>
    </Container>
  );
}

export default Home;
