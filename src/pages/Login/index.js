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
import formatCnpj from "@brazilian-utils/format-cnpj";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Login() {
  const history = useHistory();

  const [login, setLogin] = useState({
    cpf_cnpj: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("session", {
        cnpj_ou_cpf: login.cpf_cnpj,
        password: login.password,
      });

      signIn(response.data);

      history.push("/home");
    } catch (error) {
      console.error(error);
    }
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
              id="cpf_cnpj"
              label="CPF/CNPJ"
              type="text"
              value={
                login.cpf_cnpj.length < 15
                  ? formatCpf(login.cpf_cnpj)
                  : formatCnpj(login.cpf_cnpj)
              }
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
