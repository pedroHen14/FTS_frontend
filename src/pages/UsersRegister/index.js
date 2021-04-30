import NavigationMenu from "../../components/NavigationMenu";
import imgLogo from "../../assets/FTS.png";
import {
  Body,
  ButtonRegister,
  Container,
  ContainerForm,
  FormRegister,
  Header,
} from "./styles";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Tag from "../../components/Tag";
import formatCpf from "@brazilian-utils/format-cpf";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { getUser, signOut } from "../../services/security";
import { useHistory } from "react-router";
import { useRef } from "react";

function UsersRegister() {
  const history = useHistory();

  const user = getUser();

  const [register, setRegister] = useState({
    name: "",
    role: "",
    branch: "",
    cpf: "",
    rg: "",
    password: "",
  });

  const [permissions, setPermissions] = useState([]);

  const [permissionsSel, setPermissionsSel] = useState([]);

  const [reload, setReload] = useState(null);

  const [roles, setRoles] = useState([]);

  const permissionsRef = useRef();

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

    const loadPermissions = async () => {
      try {
        const response = await api.get("/permission");

        setPermissions(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadPermissions();
  }, [reload]);

  const handlePermissions = (e) => {
    const idSel = e.target.value;

    const permissionSel = permissions.find((p) => p.id.toString() === idSel);

    if (permissionSel && !permissionsSel.includes(permissionSel))
      setPermissionsSel([...permissionsSel, permissionSel]);

    e.target[e.target.selectedIndex].disabled = true;
    e.target.value = "";
  };

  const handleUnselPermission = (idUnsel) => {
    setPermissionsSel(permissionsSel.filter((c) => c.id !== idUnsel));

    const { options } = permissionsRef.current;

    for (var i = 0; i < options.length; i++) {
      if (options[i].value === idUnsel.toString()) options[i].disabled = false;
    }
  };

  const handleRoles = (e) => {
    const idSel = e.target.value;

    const roleSel = roles.find((c) => c.id.toString() === idSel);

    setRegister({ ...register, ["role"]: roleSel?.id });
  };

  const handleBranches = (e) => {
    const idSel = e.target.value;

    const branchSel = user.branches.find((b) => b.id.toString() === idSel);

    setRegister({ ...register, ["branch"]: branchSel?.id });
    // else setRegister({ ...register, ["branch"]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const permissions = permissionsSel.reduce((s, p) => (s += p.id + ","), "");

    try {
      const response = await api.post("/user", {
        user_name: register.name,
        rg: register.rg,
        cpf: register.cpf,
        user_password: register.password,
        permissions: permissions.substr(0, permissions.length - 1),
        branch_id: parseInt(register.branch),
        role_id: register.role,
      });

      handleReload(e);
    } catch (error) {
      alert(error);
    }
  };

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleReload = (e) => {
    setRegister({
      name: "",
      role: "",
      branch: "",
      cpf: "",
      rg: "",
      password: "",
    });

    setPermissions([]);
    setPermissionsSel([]);

    setReload(Math.random());
  };

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  console.log(permissionsSel.reduce((s, p) => (s += p.id + ","), ""));

  return (
    <Container>
      <NavigationMenu image={imgLogo} handleSignOut={() => handleSignOut()} />
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
            <Select id="role" value={register.role} handler={handleRoles}>
              <option value="">Selecione o cargo</option>
              {roles.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.role_name}
                </option>
              ))}
            </Select>
            {user.branches && (
              <Select
                id="branch"
                value={register.branch}
                handler={handleBranches}
              >
                <option value="">Selecione a filial</option>
                {user.branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.branch_name}
                  </option>
                ))}
              </Select>
            )}
            <Select
              id="permissions"
              handler={handlePermissions}
              ref={permissionsRef}
            >
              <option value="">Selecione as permissões</option>
              {permissions.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.permission_name}
                </option>
              ))}
            </Select>
            <div>
              {permissionsSel.map((c) => (
                <Tag
                  key={c.id}
                  info={c.permission_name}
                  handleClose={() => handleUnselPermission(c.id)}
                ></Tag>
              ))}
            </div>
            <ButtonRegister
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--secondary)",
              }}
            >
              Entrar
            </ButtonRegister>
          </FormRegister>
        </ContainerForm>
      </Body>
    </Container>
  );
}

export default UsersRegister;
