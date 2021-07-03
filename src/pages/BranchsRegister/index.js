import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Dashboard from "../../layouts/Dashboard";
import { api, apiCep } from "../../services/api";
import { notify } from "../../utils";

import {
  Container,
  ContainerForm,
  Input,
  ContainerInput,
  FormRegister,
  ButtonRegister,
  TableList,
} from "./styles";

import { FaEdit } from "react-icons/fa";

import Modal from "../../components/Modal";

import { getUser } from "../../services/security";
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@material-ui/core";
import { useEffect } from "react";
import { AppsOutlined } from "@material-ui/icons";

function BranchsRegister() {
  const user = getUser();

  const [isLoading, setIsLoading] = useState(false);

  const [register, setRegister] = useState({
    branch_name: "",
    branch_email: "",
    place_number: "",
    cep: "",
    district: "",
    city: "",
    street: "",
    state: "",
  });

  const [editBranch, setEditBranch] = useState({
    branch_name: "",
    branch_email: "",
    place_number: "",
  });

  const [idBranch, setIdBranch] = useState("");

  const [branches, setBranches] = useState([]);

  const [reload, setReload] = useState(0);

  const [openModalEditBranch, setOpenModalEditBranch] = useState(false);

  const [openModalList, setOpenModalList] = useState(false);

  const columns = [
    { id: "name", label: "Nome", minWidth: 150 },
    { id: "email", label: "E-mail", minWidth: 150 },
    { id: "address", label: "Endereço", minWidth: 150 },
    { id: "created_at", label: "Data de criação", minWidth: 150 },
    { id: "options", label: "Opções", minWidth: 150 },
  ];

  useEffect(() => {
    setIsLoading(true);
    const loadBranches = async () => {
      const company_id = user.id;

      try {
        const { data } = await api.get(`/company/${company_id}/branch`);

        setBranches(data);
        setIsLoading(false);
      } catch (error) {
        notify("Não foi possível encontrar as filiais");
      }
    };

    loadBranches();
  }, [user.id, reload]);

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });

    if (e.target.id === "cep") {
      const { cep } = { cep: e.target.value };

      if (cep.length >= 9) {
        handleCep(cep);
      }
    }
  };

  const handleCep = async (cep) => {
    cep.replace("-", "");

    try {
      const { data } = await apiCep.get(`${cep}/json`);

      setRegister({
        ...register,
        cep: data.cep,
        district: data.bairro,
        city: data.localidade,
        street: data.logradouro,
        state: data.uf,
      });
    } catch (error) {
      notify("CEP não é válido", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const company_id = user.id;

    try {
      await api.post("branch", {
        branch_name: register.branch_name,
        branch_email: register.branch_email,
        place_number: parseInt(register.place_number),
        company_id: company_id,
        address: {
          street: register.street,
          complement: "nandandnandna",
          cep: register.cep.replace("-", ""),
          district: register.district,
          city: register.city,
          uf: register.state,
        },
      });

      handleReload(e);
      notify("Sua filial foi cadastrada com sucesso!", "success");
    } catch (error) {
      notify("Falha ao cadastrar a filial!", "error");
    }
  };

  const handleReload = (e) => {
    setRegister({
      branch_email: "",
      branch_name: "",
      place_number: "",
      cep: "",
      district: "",
      city: "",
      street: "",
      state: "",
    });

    setEditBranch({
      branch_email: "",
      branch_name: "",
      place_number: "",
    });

    setReload(Math.random());
  };

  const handleUpdateBranch = (e) => {
    setEditBranch({ ...editBranch, [e.target.id]: e.target.value });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/branch/${idBranch}`, {
        branch_email: editBranch.branch_email,
        branch_name: editBranch.branch_name,
        place_number: editBranch.place_number,
      });

      handleReload(e);
      setOpenModalEditBranch(false);
      notify("Dados da filial atualizados com sucesso", "success");
    } catch (error) {
      notify("Falha ao editar filial", "error");
    }
  };

  return (
    <>
      {openModalEditBranch && (
        <Modal
          color="#f8f8f8"
          title="Editar filial"
          handleClose={() => setOpenModalEditBranch(false)}
        >
          <FormRegister onSubmit={handleSubmitEdit}>
            <Input
              id="branch_name"
              variant="outlined"
              label="Nome da Filial"
              type="text"
              value={editBranch.branch_name}
              onChange={handleUpdateBranch}
              required
            />
            <Input
              id="branch_email"
              variant="outlined"
              label="Email da Filial"
              type="email"
              value={editBranch.branch_email}
              onChange={handleUpdateBranch}
              required
            />
            <Input
              id="place_number"
              variant="outlined"
              label="Número"
              type="number"
              value={editBranch.place_number}
              onChange={handleUpdateBranch}
              required
            />
            <ButtonRegister
              type="submit"
              style={{ backgroundColor: "var(--dark)", color: "white" }}
            >
              Alterar
            </ButtonRegister>
          </FormRegister>
        </Modal>
      )}
      {openModalList && (
        <Modal color="#f8f8f8" handleClose={() => setOpenModalList(false)}>
          <ContainerForm>
            <FormRegister onSubmit={handleSubmit}>
              <ContainerInput>
                <Input
                  id="place_number"
                  variant="outlined"
                  label="Número"
                  type="number"
                  value={register.place_number}
                  onChange={handleInput}
                  required
                />

                <Input
                  id="cep"
                  variant="outlined"
                  label="CEP"
                  type="text"
                  value={register.cep
                    .replace(/(\d{5})(\d)/, "$1-$2")
                    .replace(/(\d{3})$/, "$1")}
                  onChange={handleInput}
                  inputProps={{ maxLength: "9" }}
                  required
                />
              </ContainerInput>

              <ContainerInput>
                <Input
                  id="branch_name"
                  variant="outlined"
                  label="Nome da Filial"
                  type="text"
                  value={register.branch_name}
                  onChange={handleInput}
                  required
                />
                <Input
                  id="branch_email"
                  variant="outlined"
                  label="Email da Filial"
                  type="email"
                  value={register.branch_email}
                  onChange={handleInput}
                  required
                />
              </ContainerInput>

              <ContainerInput>
                <Input
                  id="street"
                  variant="outlined"
                  label="Rua"
                  type="text"
                  value={register.street}
                  onChange={handleInput}
                  required
                />
              </ContainerInput>
              <ContainerInput>
                <Input
                  id="district"
                  variant="outlined"
                  label="Bairro"
                  type="text"
                  value={register.district}
                  onChange={handleInput}
                  required
                />

                <Input
                  id="city"
                  variant="outlined"
                  label="Cidade"
                  type="text"
                  value={register.city}
                  onChange={handleInput}
                  required
                />
                <Input
                  id="state"
                  variant="outlined"
                  label="Estado"
                  type="text"
                  value={register.state}
                  onChange={handleInput}
                  required
                />
              </ContainerInput>
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
      <Dashboard title="Filiais">
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
                  {branches &&
                    branches.map((p, index) => {
                      return (
                        <TableRow hover tabIndex={-1} key={index}>
                          <TableCell>{p.branch_name}</TableCell>
                          <TableCell>{p.branch_email}</TableCell>
                          <TableCell>{`${p.Address.street}, ${p.place_number} - ${p.Address.city}`}</TableCell>
                          <TableCell>
                            {new Date(p.created_at).toLocaleDateString(
                              "pt-BR",
                              {
                                timeZone: "UTC",
                              }
                            )}
                          </TableCell>
                          <TableCell>
                            <FaEdit
                              onClick={() => {
                                setIdBranch(p.id);
                                setOpenModalEditBranch(true);
                              }}
                              className="icon-edit"
                            />
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

export default BranchsRegister;
