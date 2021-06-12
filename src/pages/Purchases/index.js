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
import { TextareaAutosize } from "@material-ui/core";

function Purchases() {
  const user = getUser();

  const [register, setRegister] = useState({
    product_name: "",
    description: "",
    bar_code: "",
    cost_per_item: "",
    unit_of_measurement_id: "",
    product_type_id: "",
  });

  const [reload, setReload] = useState(null);

  const [productType, setProductType] = useState([]);

  const [unit, setUnit] = useState([]);

  useEffect(() => {
    const loadProductType = async () => {
      try {
        const response = await api.get("/productType");

        setProductType(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadProductType();

    const loadUnits = async () => {
      try {
        const response = await api.get("/unit");

        setUnit(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadUnits();

    console.log(user);
  }, [reload]);

  const handleUnit = (e) => {
    const idSel = e.target.value;

    const unitSel = unit.find((u) => u.id.toString() === idSel);

    setRegister({ ...register, ["unit_of_measurement_id"]: unitSel?.id });
  };

  const handleProductType = (e) => {
    const idSel = e.target.value;

    const productTypeSel = productType.find((p) => p.id.toString() === idSel);

    setRegister({ ...register, ["product_type_id"]: productTypeSel?.id });
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

    const company_id = user.branches.map((u) => u.CompanyId);

    try {
      await api.post("/product", {
        product_name: register.product_name,
        description: register.description,
        bar_code: register.bar_code,
        cost_per_item: register.cost_per_item,
        unit_of_measurement_id: register.unit_of_measurement_id,
        product_type_id: register.product_type_id,
        company_id: company_id[0],
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
      product_name: "",
      description: "",
      bar_code: "",
      cost_per_item: "",
      unit_of_measurement_id: "",
      product_type_id: "",
      company_id: "",
    });

    setReload(Math.random());
  };

  return (
    <Dashboard title="Cadastro de produtos">
      <ToastContainer style={{ color: "white" }} />
      <ContainerForm>
        <FormRegister onSubmit={handleSubmit}>
          <ContainerInput>
            <Input
              id="product_name"
              label="Nome do produto"
              type="text"
              variant="outlined"
              value={register.product_name}
              onChange={handleInput}
              required
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              id="bar_code"
              variant="outlined"
              label="Código de barras"
              type="decimal"
              value={register.bar_code}
              onChange={handleInput}
              required
            />
            <Input
              id="cost_per_item"
              variant="outlined"
              label="Valor unitário"
              type="text"
              value={register.cost_per_item}
              onChange={handleInput}
              required
            />
          </ContainerInput>
          <ContainerInput>
            <TextareaAutosize
              id="description"
              style={{ flex: 1, resize: "none" }}
              rowsMin={5}
              rowsMax={10}
              value={register.description}
              onChange={handleInput}
              required
            />
          </ContainerInput>

          <Select
            id="unit_of_measurement_id"
            value={register.unit_of_measurement_id}
            handler={handleUnit}
          >
            <option value="">Selecione a unidade de medida</option>
            {unit.map((u) => (
              <option key={u.id} value={u.id}>
                {u.unit_name}
              </option>
            ))}
          </Select>
          <Select
            id="product_type_id"
            value={register.product_type_id}
            handler={handleProductType}
          >
            <option value="">Selecione o tipo do produto</option>
            {productType.map((p) => (
              <option key={p.id} value={p.id}>
                {p.type}
              </option>
            ))}
          </Select>
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

export default Purchases;
