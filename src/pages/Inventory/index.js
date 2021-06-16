import {
  ButtonRegister,
  Container,
  ContainerForm,
  ContainerInput,
  ContainerListLogbook,
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
import { TextField } from "@material-ui/core";
import { format } from "date-fns";
import { notify } from "../../utils";

function Inventory() {
  const user = getUser();

  const [register, setRegister] = useState({
    date_of_acquisition: "",
    quantity_acquired: "",
    product_id: "",
    lot_number: "",
    manufacture_date: "",
    expiration_date: "",
  });

  const [reload, setReload] = useState(null);

  const [product, setProduct] = useState([]);

  const [logbook, setLogbook] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await api.get(
          `/company/${user.branch.map((b) => b.company_id)}/product`
        );

        setProduct(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadProduct();

    const loadLogbooks = async () => {
      try {
        const response = await api.get(
          `/branch/${user.branch.map((b) => b.company_id)}/logbook`
        );

        setLogbook(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadLogbooks();
  }, [reload]);

  const handleProduct = (e) => {
    const idSel = e.target.value;

    const productSel = product.find((p) => p.id.toString() === idSel);

    setRegister({ ...register, ["product_id"]: productSel?.id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const company_id = user.branch.map((u) => u.company_id);

    console.log(register.manufacture_date, register.expiration_date);

    try {
      const response = await api.post("/logbook", {
        date_of_acquisition: register.date_of_acquisition,
        quantity_acquired: register.quantity_acquired,
        branch_id: parseInt(company_id),
        product_id: register.product_id,
        lot: {
          lot_number: register.lot_number,
          manufacture_date: register.manufacture_date,
          expiration_date: register.expiration_date,
        },
      });

      handleReload(e);

      notify("Estoque cadastrado com sucesso", "success");
    } catch (error) {
      notify("Erro ao cadastrar o estoque", "error");
    }
  };

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleReload = (e) => {
    setRegister({
      date_of_acquisition: "",
      quantity_acquired: "",
      product_id: "",
      lot_number: "",
      manufacture_date: "",
      expiration_date: "",
    });

    setReload(Math.random());
  };

  return (
    <Dashboard title="Estoque">
      <ToastContainer style={{ color: "white" }} />
      <Container>
        <ContainerForm>
          <FormRegister onSubmit={handleSubmit}>
            <ContainerInput>
              <Input
                id="date_of_acquisition"
                label="Data de aquisição"
                type="date"
                defaultValue={Date.now()}
                value={register.date_of_acquisition}
                onChange={handleInput}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Input
                id="manufacture_date"
                label="Data de expedição"
                type="date"
                defaultValue={Date.now()}
                value={register.manufacture_date}
                onChange={handleInput}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Input
                id="expiration_date"
                label="Data de validade"
                type="date"
                defaultValue={Date.now()}
                value={register.expiration_date}
                onChange={handleInput}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                id="quantity_acquired"
                variant="outlined"
                label="Quantidade total"
                type="decimal"
                value={register.quantity_acquired}
                onChange={handleInput}
                required
              />
              <Input
                id="lot_number"
                variant="outlined"
                label="Número do lote"
                type="decimal"
                value={register.lot_number}
                onChange={handleInput}
                required
              />
            </ContainerInput>

            <Select
              id="product_id"
              value={register.product_id}
              handler={handleProduct}
            >
              <option value="">Selecione o produto</option>
              {product.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.product_name}
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
        <ContainerListLogbook>
          <header className="header">
            <h2>Lista de Estoque</h2>
          </header>
          <table>
            <tr>
              <td>
                <h4>Quantidade</h4>
              </td>
              <td>
                <h4>Número do lote</h4>
              </td>
              <td>
                <h4>Cód. barras</h4>
              </td>
              <td>
                <h4>Produto</h4>
              </td>
              <td>
                <h4>Data de Aquis.</h4>
              </td>
            </tr>
            {logbook &&
              logbook.map((p, index) => {
                console.log(p);
                return (
                  <tr key={index}>
                    <td>{p.quantity_acquired}</td>
                    <td>{p.Lot.lot_number}</td>
                    <td>{p.Product.bar_code}</td>
                    <td>{p.Product.product_name}</td>
                    <td>
                      {format(new Date(p.date_of_acquisition), "dd/MM/yyyy")}
                    </td>
                  </tr>
                );
              })}
          </table>
        </ContainerListLogbook>
      </Container>
    </Dashboard>
  );
}

export default Inventory;
