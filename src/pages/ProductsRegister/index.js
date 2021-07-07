import {
  ButtonRegister,
  ContainerForm,
  ContainerInput,
  FormRegister,
  Input,
  Container,
} from "./styles";
import Select from "../../components/Select";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
import Dashboard from "../../layouts/Dashboard";
import { ToastContainer } from "react-toastify";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TextareaAutosize,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { notify } from "../../utils";
import { TableList } from "../BranchsRegister/styles";
import Modal from "../../components/Modal";

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

  const [openModalList, setOpenModalList] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState(null);

  const imageRef = useRef();


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

    const loadProducts = async () => {
      setIsLoading(true);
      const company_id = user.user_cpf
        ? user.branch?.company_id
        : user.branch[0]?.company_id;
      try {
        const { data } = await api.get(`/company/${company_id}/product`);

        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        notify("Produtos não encontrados", "error");
      }
    };

    loadProducts();
  }, [reload]);

  const handleImage = (e) => {
      if (e.target.files[0]) {
        imageRef.current.src = URL.createObjectURL(e.target.files[0]);
        imageRef.current.style.display = "flex";
      } else {
        imageRef.current.src = "";
        imageRef.current.style.display = "none";
      }
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
  };
  

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

  //TODO: ENVIAR IMAGEM JUNTO AO PRODUTO PARA A API

  // const handleAddProduct = async(e) => {
  //   e.preventDefault();

  //   const data = new FormData();

  //   data.append('product_name', );
  //   data.append('description', );
  //   data.append('bar_code', );
  //   data.append('cost_per_item', );
  //   data.append('unit_of_measurement_id', );
  //   data.append('product_type_id', );

  //   if(image) data.append('image', );
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const company_id = user.user_cpf ? user.branch.company_id : user.id;

    const form = new FormData();

    form.append("product_name", register.product_name);
    form.append("description", register.description);
    form.append("bar_code", register.bar_code);
    form.append("cost_per_item", register.cost_per_item);
    form.append("image", image);
    form.append("unit_of_measurement_id", register.unit_of_measurement_id);
    form.append("product_type_id", register.product_type_id);
    form.append("company_id", company_id);

    try {
      await api.post("/product", form);

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

    setImage(null);

    imageRef.current.src = "";
    imageRef.current.style.display = "none";

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
              <div className="container-input-image">
                <div className="div">
                  <Input
                    id="image"
                    label="Imagem"
                    type="file"
                    ref={imageRef}
                    onChange={handleImage}
                  />
                  <img alt="Pré-visualização" ref={imageRef} />
                </div>
              </div>

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
        </Modal>
      )}
      <Dashboard title="Produtos">
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
                  {products &&
                    products.map((p, index) => {
                      return (
                        <TableRow hover tabIndex={-1} key={index}>
                          <TableCell>{p.product_name}</TableCell>
                          <TableCell>{p.description}</TableCell>
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
  )
}


export default ProductsRegister;
