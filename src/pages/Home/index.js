import { getUser } from "../../services/security";
import { useHistory } from "react-router";
import Dashboard from "../../layouts/Dashboard";
import { Container } from "./styles";

function Home() {
  const user = getUser();

  console.log(user);

  return (
    <Dashboard title="Home">
      <Container>
        <h1>
          Seja bem-vindo ao nosso sistema de gerenciamento comercial{" "}
          {user.user_name ? user.user_name : user.fantasy_name}
        </h1>
      </Container>
    </Dashboard>
  );
}

export default Home;
