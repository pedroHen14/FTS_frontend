import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import { Body, Container } from "./styles";
import { signOut } from "../../services/security";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();

  const teste = [
    { route: "/registerManager", name: "Cadastro gerente" },
    { route: "/registerEmployees", name: "Cadastro funcionário" },
  ];

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  return (
    <Container>
      <NavigationMenu
        image={imgLogo}
        menuItens={teste}
        handleSignOut={() => handleSignOut()}
      />
      <Body>
        <h1>Seja bem-vindo ao nosso sistema de gerenciamento comercial</h1>
      </Body>
    </Container>
  );
}

export default Home;
