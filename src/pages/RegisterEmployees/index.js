import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import {
  Body,
  Container,
  Header,
  ContainerForm,
  FormRegister,
  Button,
} from "./styles";
import { useState } from "react";
import formatCpf from "@brazilian-utils/format-cpf";
import Input from "../../components/Input";

function RegisterEmployees() {
  const [register, setRegister] = useState({
    name: "",
    cpf: "",
    rg: "",
    password: "",
  });

  const testeItens = [
    { route: "/registerManager", name: "Cadastro gerente" },
    { route: "/registerEmployees", name: "Cadastro funcionário" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(register);
  };

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  return (
    <Container>
      <NavigationMenu image={imgLogo} menuItens={testeItens} />
      <Body>
        <Header>
          <h1>Pagina de cadastro de funcionários</h1>
        </Header>
        <ContainerForm>
          <FormRegister onSubmit={handleSubmit}>
            <Input
              id="name"
              label="Nome"
              type="text"
              value={register.name}
              handler={handleInput}
              required
            />
            <Input
              id="cpf"
              label="CPF"
              type="text"
              value={formatCpf(register.cpf)}
              handler={handleInput}
              required
            />
            <Input
              id="rg"
              label="RG"
              type="text"
              value={register.rg}
              handler={handleInput}
              required
              maxLength="14"
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              value={register.password}
              handler={handleInput}
              required
            />
            <Button>Cadastrar</Button>
          </FormRegister>
        </ContainerForm>
      </Body>
    </Container>
  );
}

export default RegisterEmployees;
