import {
  Container,
  ContainerLogin,
  FormLogin,
  ImageLogin,
  Header,
  Button,
  Body,
} from "./styles";

import Input from "../../components/Input";
import imgLogo from "../../assets/FTS.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import formatCpf from "@brazilian-utils/format-cpf";

function Login() {
  const history = useHistory();

  const [login, setLogin] = useState({
    cpf: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    history.push("/home");
    console.log(login);
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <Container>
      <ContainerLogin>
        <ImageLogin>
          <img src={imgLogo} alt="logo" />
        </ImageLogin>
        <FormLogin onSubmit={handleSubmit}>
          <Header>
            <h1>Faça o Login</h1>
          </Header>
          <Body>
            <Input
              id="cpf"
              label="CPF"
              type="text"
              value={formatCpf(login.cpf)}
              handler={handleInput}
              required
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              value={login.password}
              handler={handleInput}
              required
            />
            <Button>Entrar</Button>
          </Body>
        </FormLogin>
      </ContainerLogin>
    </Container>
  );
}

export default Login;
