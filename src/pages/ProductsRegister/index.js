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
import { toast, ToastContainer } from "react-toastify";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TextareaAutosize,
} from "@material-ui/core";
import { notify } from "../../utils";
import { TableList } from "../BranchsRegister/styles";

function ProductsRegister() {
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

  const [products, setProducts] = useState([]);

  const columns = [
    { id: "name", label: "Nome", minWidth: 150 },
    { id: "description", label: "Descrição", minWidth: 150 },
    { id: "created_at", label: "Data de criação", minWidth: 150 },
  ];

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

    const loadProducts = async () => {
      const company_id = user.user_cpf
        ? user.branch?.company_id
        : user.branch[0]?.company_id;
      try {
        const { data } = await api.get(`/company/${company_id}/product`);

        setProducts(data);
      } catch (error) {
        notify("Produtos não encontrados", "error");
      }
    };

    loadProducts();

    console.log(products);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);

    const company_id = user.user_cpf ? user.branch.company_id : user.id;

    try {
      await api.post("/product", {
        product_name: register.product_name,
        description: register.description,
        bar_code: register.bar_code,
        cost_per_item: register.cost_per_item,
        unit_of_measurement_id: register.unit_of_measurement_id,
        product_type_id: register.product_type_id,
        company_id: company_id,
      });

      handleReload(e);

      notify("Produto cadastrado com sucesso!", "success");
    } catch (error) {
      notify("Falha ao cadastrar o produto!", "error");
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
      <Container>
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
                style={{
                  flex: 1,
                  resize: "none",
                  padding: "10px",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
                placeholder="Digite aqui a descrição do produto..."
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
        <TableContainer
          style={{
            width: "100%",
            borderRadius: "10px",
            border: "1px solid var(--dark)",
            height: "300px",
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
              {products &&
                products.map((p, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={index}>
                      <TableCell>{p.product_name}</TableCell>
                      <TableCell>{p.description}</TableCell>
                      <TableCell>
                        {new Date(p.created_at).toLocaleDateString("pt-BR", {
                          timeZone: "UTC",
                        })}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </TableList>
        </TableContainer>
      </Container>
    </Dashboard>
  );
}

export default ProductsRegister;
