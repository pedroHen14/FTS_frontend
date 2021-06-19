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
} from "./styles";

import formatCnpj from "@brazilian-utils/format-cnpj";

import { getUser } from "../../services/security";

function BranchsRegister() {
  const user = getUser();

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

  const [reload, setReload] = useState(0);

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

      handleReload();
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

    setReload(Math.random());
  };

  return (
    <Dashboard title="Cadastro de Filial">
      <ToastContainer style={{ color: "white" }} />
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
    </Dashboard>
  );
}

export default BranchsRegister;
