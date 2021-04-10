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
import { useEffect } from "react";
import { api } from "../../services/api";
import { getUser } from "../../services/security";

function RegisterManager() {
  const company = getUser();

  const [register, setRegister] = useState({
    name: "",
    office: "",
    branch: "",
    cpf: "",
    rg: "",
    password: "",
  });

  const [reload, setReload] = useState(null);

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const response = await api.get("/role");

        setRoles(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadRoles();
  }, [reload]);

  const testeItens = [
    { route: "/registerManager", name: "Cadastro gerente" },
    { route: "/registerEmployees", name: "Cadastro funcionário" },
  ];

  const handleRoles = (e) => {
    const idSel = e.target.value;

    const categorySel = roles.find((c) => c.id.toString() === idSel);

    setRegister({ ...register, ["office"]: categorySel.id });

    console.log(idSel);
  };

  const handleBranches = (e) => {
    const idSel = e.target.value;

    const branchSel = company.branches.find((b) => b.id.toString() === idSel);

    setRegister({ ...register, ["branch"]: branchSel.id });

    console.log(idSel);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/manager", {
        manager_name: register.name,
        rg: register.rg,
        cpf: register.cpf,
        manager_password: register.password,
        branch_id: register.branch,
        role_id: register.office,
      });

      console.log(response.data);

      handleReload();
    } catch (error) {
      alert(error);
    }

    console.log(register);
  };

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleReload = () => {
    setRegister({
      name: "",
      office: "",
      branch: "",
      cpf: "",
      rg: "",
      password: "",
    });
    setReload(Math.random());
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
            <Select id="manager" handler={handleRoles}>
              <option value="">Selecione o cargo</option>
              {roles.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.role_name}
                </option>
              ))}
            </Select>
            <Select id="branch" handler={handleBranches}>
              <option value="">Selecione a filial</option>
              {company.branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.branch_name}
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
              maxLength="14"
            />
            <Input
              id="rg"
              label="RG"
              type="text"
              value={register.rg}
              handler={handleInput}
              required
              maxLength="12"
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
