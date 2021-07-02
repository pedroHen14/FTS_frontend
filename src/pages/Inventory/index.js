import {
  ButtonRegister,
  Container,
  ContainerForm,
  ContainerInput,
  FormRegister,
  Input,
} from "./styles";
import Select from "../../components/Select";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
import Dashboard from "../../layouts/Dashboard";
import { ToastContainer } from "react-toastify";
import { notify } from "../../utils";
import {
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { TableList } from "../BranchsRegister/styles";
import Modal from "../../components/Modal";

function Inventory() {
  const user = getUser();

  const [register, setRegister] = useState({
    date_of_acquisition: "",
    quantity_acquired: "",
    product_id: "",
    lot_number: "",
    manufacture_date: null,
    expiration_date: null,
  });

  const [reload, setReload] = useState(null);

  const [product, setProduct] = useState([]);

  const [logbook, setLogbook] = useState([]);

  const [openModalList, setOpenModalList] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { id: "quantity_acquired", label: "Quantidade", minWidth: 150 },
    { id: "lot_number", label: "Número do lote", minWidth: 150 },
    { id: "bar_code", label: "Cód. barras", minWidth: 150 },
    { id: "product", label: "Produto", minWidth: 150 },
    { id: "date_of_acquisition", label: "Data de Aquis.", minWidth: 150 },
  ];

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(
          `/company/${user.user_cpf ? user.branch.company_id : user.id}/product`
        );

        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    loadProduct();

    const loadLogbooks = async () => {
      try {
        const response = await api.get(
          `/branch/${
            user.user_cpf ? user.branch.id : user.branch[0]?.id
          }/logbook`
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

    const company_id = user.user_cpf ? user.branch.id : user.branch[0].id;

    try {
      await api.post("/logbook", {
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
      manufacture_date: null,
      expiration_date: null,
    });

    setReload(Math.random());
  };

  return (
    <>
      {openModalList && (
        <Modal handleClose={() => setOpenModalList(false)} color="#f8f8f8">
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
        </Modal>
      )}
      <Dashboard title="Estoque">
        <ToastContainer style={{ color: "white" }} />
        <Container>
          <Button
            style={{
              backgroundColor: "var(--green)",
              color: "white",
              alignSelf: "flex-end",
            }}
            variant="contained"
            size="large"
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
                  {logbook &&
                    logbook.map((p, index) => {
                      return (
                        <TableRow hover tabIndex={-1} key={index}>
                          <TableCell>{p.quantity_acquired}</TableCell>
                          <TableCell>{p.Lot.lot_number}</TableCell>
                          <TableCell>{p.Product.bar_code}</TableCell>
                          <TableCell>{p.Product.product_name}</TableCell>
                          <TableCell>
                            {new Date(p.date_of_acquisition).toLocaleDateString(
                              "pt-BR",
                              { timeZone: "UTC" }
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

export default Inventory;
