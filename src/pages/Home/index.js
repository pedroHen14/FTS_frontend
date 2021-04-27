import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import { Body, Container } from "./styles";
import { getUser, signOut } from "../../services/security";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();

  const user = getUser();

  console.log(user.permissions);

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  return (
    <Container>
      <NavigationMenu
        image={imgLogo}
        menuItens={user.permissions}
        handleSignOut={() => handleSignOut()}
      />
      <Body>
        <h1>Seja bem-vindo ao nosso sistema de gerenciamento comercial</h1>
      </Body>
    </Container>
  );
}

export default Home;
