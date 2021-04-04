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

function Login() {
  return (
    <Container>
      <ContainerLogin>
        <ImageLogin>
          <img />
        </ImageLogin>
        <FormLogin>
          <Header>
            <h1>Faça o Login</h1>
          </Header>
          <Body>
            <Input id="email" label="E-mail" type="email" required />
            <Input id="password" label="Senha" type="password" required />
            <Button>Entrar</Button>
          </Body>
        </FormLogin>
      </ContainerLogin>
    </Container>
  );
}

export default Login;
