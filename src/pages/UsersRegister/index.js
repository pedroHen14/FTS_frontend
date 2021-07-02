import {
  ButtonRegister,
  ContainerForm,
  ContainerInput,
  FormRegister,
  Input,
  Container,
} from "./styles";
import Select from "../../components/Select";
import Tag from "../../components/Tag";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
import { useRef } from "react";
import Dashboard from "../../layouts/Dashboard";
import { ToastContainer } from "react-toastify";
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@material-ui/core";
import formatCpf from "@brazilian-utils/format-cpf";
import { notify } from "../../utils";
import { TableList } from "../BranchsRegister/styles";
import Modal from "../../components/Modal";

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

  const [branches, setBranches] = useState([]);

  const [permissions, setPermissions] = useState([]);

  const [permissionsSel, setPermissionsSel] = useState([]);

  const [reload, setReload] = useState(null);

  const [roles, setRoles] = useState([]);

  const [users, setUsers] = useState([]);

  const [openModalList, setOpenModalList] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const permissionsRef = useRef();

  const columns = [
    { id: "name", label: "Nome", minWidth: 150 },
    { id: "branch", label: "Filial", minWidth: 150 },
    { id: "address", label: "Cargo", minWidth: 150 },
    { id: "created_at", label: "Data de criação", minWidth: 150 },
  ];

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

    const loadBranches = async () => {
      try {
        const { data } = await api.get(
          `/company/${user.user_cpf ? user.branch.companyId : user.id}/branch`
        );

        setBranches(data);
      } catch (error) {
        notify("Não foi possível localizar as filiais para listagem", "error");
      }
    };

    loadBranches();

    const loadUsers = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(
          `/company/${user.user_cpf ? user.branch.company_id : user.id}/user`
        );

        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        notify("Usuários não encontrados", "error");
      }
    };

    loadUsers();
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

    const branchSel = branches.find((b) => b.id.toString() === idSel);

    setRegister({ ...register, ["branch"]: branchSel?.id });
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

      notify("Usuário cadastrado com sucesso!", "success");
    } catch (error) {
      notify("Falha ao cadastrar o usuário!", "error");
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

  return (
    <>
      {openModalList && (
        <Modal color="#f8f8f8" handleClose={() => setOpenModalList(false)}>
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
                  inputProps={{ maxLength: "9" }}
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
              {branches && (
                <Select
                  id="branch"
                  value={register.branch}
                  handler={handleBranches}
                >
                  <option value="">Selecione a filial</option>
                  {branches.map((b) => (
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
                  color: "var(--white)",
                }}
              >
                Cadastrar
              </ButtonRegister>
            </FormRegister>
          </ContainerForm>
        </Modal>
      )}
      <Dashboard title="Usuários">
        <ToastContainer style={{ color: "white" }} />
        <Container>
          <Button
            style={{
              backgroundColor: "var(--green)",
              color: "white",
              alignSelf: "flex-end",
            }}
            size="large"
            variant="contained"
            onClick={() => setOpenModalList(true)}
          >
            Cadastre
          </Button>
          {isLoading ? (
            <CircularProgress size={100} />
          ) : (
            <TableContainer
              style={{
                width: "100%",
                borderRadius: "10px",
                border: "1px solid var(--dark)",
                height: "100vh",
              }}
            >
              <TableList stickyHeader aria-label="">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users &&
                    users.map((p, index) => {
                      return (
                        <TableRow hover tabIndex={-1} key={index}>
                          <TableCell>{p.user_name}</TableCell>
                          <TableCell>{p.Branch.branch_name}</TableCell>
                          <TableCell style={{ display: "flex", gap: "10px" }}>
                            {p.Permissions.map((permission) => {
                              return (
                                <span style={{ display: "flex" }}>
                                  {permission.permission_name}
                                </span>
                              );
                            })}
                          </TableCell>
                          <TableCell>
                            {new Date(p.created_at).toLocaleDateString(
                              "pt-BR",
                              {
                                timeZone: "UTC",
                              }
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </TableList>
            </TableContainer>
          )}
        </Container>
      </Dashboard>
    </>
  );
}

export default UsersRegister;
