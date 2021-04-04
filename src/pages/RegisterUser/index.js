import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import { Container } from "./styles";

function RegisterUser() {
  const nada = [
    { rota: "/Cadastro", nome: "Cadastro" },
    { rota: "/Relatorio", nome: "Relatório" },
  ];

  return (
    <Container>
      <NavigationMenu image={imgLogo} menuItens={nada} />
    </Container>
  );
}

export default RegisterUser;
