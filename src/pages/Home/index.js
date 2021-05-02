import { getUser } from "../../services/security";
import { useHistory } from "react-router";
import Dashboard from "../../layouts/Dashboard";

function Home() {
  const user = getUser();

  console.log(user);

  return (
    <Dashboard title="Home">
      <h1>
        Seja bem-vindo ao nosso sistema de gerenciamento comercial Sr(a).{" "}
        {user.user_name ? user.user_name : user.fantasy_name}
      </h1>
    </Dashboard>
  );
}

export default Home;
