import {
  ButtonRegister,
  ContainerForm,
  ContainerInput,
  FormRegister,
  Input,
} from "./styles";
import Select from "../../components/Select";
import Tag from "../../components/Tag";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
import { useRef } from "react";
import Dashboard from "../../layouts/Dashboard";
import { toast, ToastContainer } from "react-toastify";
import { FormControl, TextField } from "@material-ui/core";
import formatCpf from "@brazilian-utils/format-cpf";

function UsersRegister() {
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

    const branchSel = user.branch.find((b) => b.id.toString() === idSel);

    setRegister({ ...register, ["branch"]: branchSel?.id });
    // else setRegister({ ...register, ["branch"]: "" });
  };

  const notify = () => {
    toast.success("Usuário cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const permissions = permissionsSel.reduce((s, p) => (s += p.id + ","), "");

    try {
      await api.post("/user", {
        user_name: register.name,
        rg: register.rg,
        cpf: register.cpf.replace(/\D/g, ""),
        user_password: register.password,
        permissions: permissions.substr(0, permissions.length - 1),
        branch_id: register.branch ? register.branch : user.branch.company_id,
        role_id: register.role,
      });

      handleReload(e);

      notify();
    } catch (error) {
      alert(error);

      console.log(user);
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

  console.log(permissionsSel.reduce((s, p) => (s += p.id + ","), ""));

  return (
    <Dashboard title="Cadastro de usuários">
      <ToastContainer style={{ color: "white" }} />
      <ContainerForm>
        <FormRegister onSubmit={handleSubmit}>
          <ContainerInput>
            <Input
              id="name"
              label="Nome"
              type="text"
              variant="outlined"
              value={register.name}
              onChange={handleInput}
              required
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              id="cpf"
              variant="outlined"
              label="CPF"
              type="text"
              value={formatCpf(register.cpf)}
              onChange={handleInput}
              required
              inputProps={{ maxLength: "14" }}
            />
            <Input
              id="rg"
              variant="outlined"
              label="RG"
              type="text"
              value={register.rg}
              onChange={handleInput}
              required
              inputProps={{ maxLength: "12" }}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              id="password"
              variant="outlined"
              label="Senha"
              type="password"
              value={register.password}
              onChange={handleInput}
              required
            />
          </ContainerInput>
          <Select id="role" value={register.role} handler={handleRoles}>
            <option value="">Selecione o cargo</option>
            {roles.map((g) => (
              <option key={g.id} value={g.id}>
                {g.role_name}
              </option>
            ))}
          </Select>
          {user.branch && (
            <Select
              id="branch"
              value={register.branch}
              handler={handleBranches}
            >
              <option value="">Selecione a filial</option>
              {user.branch.map((b) => (
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
            Cadastrar
          </ButtonRegister>
        </FormRegister>
      </ContainerForm>
    </Dashboard>
  );
}

export default UsersRegister;
