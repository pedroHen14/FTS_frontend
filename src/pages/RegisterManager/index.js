import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import {
  Body,
  Button,
  Container,
  ContainerForm,
  FormRegister,
  Header,
} from "./styles";
import Input from "../../components/Input";
import Select from "../../components/Select";
import formatCpf from "@brazilian-utils/format-cpf";
import { useState } from "react";

function RegisterManager() {
  const [register, setRegister] = useState({
    name: "",
    office: "",
    cpf: "",
    rg: "",
    password: "",
  });

  const testeGerente = [
    { id: 1, name: "Vendas" },
    { id: 2, name: "Compras" },
    { id: 3, name: "Estoque" },
    { id: 4, name: "Nadas" },
  ];

  const testeItens = [
    { route: "/registerManager", name: "Cadastro gerente" },
    { route: "/registerEmployees", name: "Cadastro funcionário" },
  ];

  const handleCategories = (e) => {
    const idSel = e.target.value;

    const categorySel = testeGerente.find((c) => c.id.toString() === idSel);

    if (categorySel) setRegister({ ...register, ["office"]: categorySel.id });

    console.log(categorySel);
  };

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
          <h1>Pagina de cadastro de gerentes</h1>
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
            <Select id="manager" handler={handleCategories}>
              <option value="">Selecione o cargo</option>
              {testeGerente.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </Select>
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

export default RegisterManager;
