import React, { useState } from "react";

import {
  ButtonRegister,
  Container,
  ContainerImage,
  ContainerInput,
  ContainerScreen,
  ContainerForm,
  FormRegister,
  ContainerSubTotalDiscount,
  Content,
  Header,
  IconUser,
  ImageLogo,
  Screen,
  ContainerFormModal,
  FormRegisterModal,
} from "./styles";
import imageLogo from "../../assets/FTS.png";
import shoppingCart from "../../assets/shopping-cart.png";
import Modal from "../../components/Modal";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { FaCheck, FaUserPlus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../services/api";
import formatCpf from "@brazilian-utils/format-cpf";
import { useEffect } from "react";
import { getUser } from "../../services/security";
import { notify } from "../../utils";

function Pdv() {
  const user = getUser();

  const [code, setCode] = useState("");
  const [cpfClient, setCpfClient] = useState("");
  const [client, setClient] = useState("");
  const [openModalDiscount, setOpenModalDiscount] = useState(false);
  const [openModalAddUser, setOpenModalAddUser] = useState(false);
  const [register, setRegister] = useState({
    costumer_name: "",
    cpf: "",
  });
  const [reload, setReload] = useState(null);

  const [productList, setProductList] = useState([]);

  const handleProducts = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/product/barCode/${code}`);

      if (productList.find((p) => p.bar_code == code)) {
        setProductList(
          productList.map((p) => {
            if (p.bar_code == code) {
              p.total += 1;
              p.cost_total = p.cost_per_item * p.total;
            }
            return p;
          })
        );
      } else {
        const product = response.data;

        product.total = 1;
        product.cost_total = product.cost_per_item;

        setProductList([...productList, product]);
      }

      setCode("");
    } catch (error) {
      notify("Este código de barras não é válido", "error");
      setCode("");
    }
  };

  const handleInput = async (e) => {
    e.preventDefault();

    switch (e.target.id) {
      case "code":
        setCode(e.target.value);
        break;
      case "cpfClient":
        setCpfClient(e.target.value);
        if (e.target.value.trim().length === 14) {
          const clientCpf = e.target.value;

          try {
            const { data } = await api.get(
              `/costumer/cpf/${clientCpf.replace(/\D/g, "")}`
            );
            setClient(data);

            notify("CPF encontrado com sucesso", "success");
          } catch (error) {
            notify("CPF ainda não tem cadastro", "error");
          }
        }
      default:
        break;
    }
  };

  document.addEventListener("keydown", (e) => {
    const key = e.key;

    switch (key) {
      case "d":
        setOpenModalDiscount(true);
        break;
      case "Escape":
        setOpenModalDiscount(false);
        break;
      case "c":
        setOpenModalAddUser(true);
        break;
      default:
        break;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/costumer", {
        cpf: register.cpf.replace(/\D/g, ""),
      });

      notify("Usuário cadastrado com sucesso", "success");
    } catch (error) {
      alert(error);
    }
  };

  const handleSale = async (e) => {
    const productsSale = productList.map((p) => {
      const items = {
        product_id: p.id,
        quantity: p.total,
      };
      return items;
    });

    const company_id = user.branch.company_id;

    const idClient = client[0]?.id;

    try {
      await api.post("/sale", {
        payment_method_id: 1,
        branch_id: parseInt(company_id),
        costumer_id: idClient,
        items: productsSale,
      });

      handleReload(e);
      notify("Venda realizada com sucesso", "success");
    } catch (error) {
      notify("A venda não foi concluída", "error");
    }
  };

  const handleInputRegister = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleReload = (e) => {
    setProductList([]);
    setCpfClient("");
    setCode("");

    setReload(Math.random());
  };

  const arrayTotal = [];

  return (
    <>
      <ToastContainer style={{ color: "white" }} />
      <Container>
        {openModalDiscount && (
          <Modal
            title="Desconto"
            handleClose={() => setOpenModalDiscount(false)}
          />
        )}
        {openModalAddUser && (
          <Modal
            title="Adicionar Cliente"
            handleClose={() => setOpenModalAddUser(false)}
          >
            <ContainerFormModal>
              <FormRegisterModal onSubmit={handleSubmit}>
                <FormControl>
                  <InputLabel htmlFor="cpf">CPF</InputLabel>
                  <Input
                    id="cpf"
                    variant="outlined"
                    label="CPF"
                    type="text"
                    value={formatCpf(register.cpf)}
                    onChange={handleInputRegister}
                    required
                    inputProps={{ maxLength: "14" }}
                  />
                </FormControl>
                <ButtonRegister
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "var(--dark)",
                    color: "var(--white)",
                  }}
                >
                  Cadastrar
                </ButtonRegister>
              </FormRegisterModal>
            </ContainerFormModal>
          </Modal>
        )}
        <Header>
          <ImageLogo src={imageLogo} />
          <h1>Caixa aberto</h1>
          <IconUser>
            <FaUserPlus />
          </IconUser>
        </Header>
        <Content>
          <div className="container">
            <FormControl style={{ display: "flex" }}>
              <InputLabel htmlFor="cpfClient">CPF cliente</InputLabel>
              <Input
                id="cpfClient"
                label="CPF cliente"
                type="text"
                variant="outlined"
                onChange={handleInput}
                value={formatCpf(cpfClient)}
                inputProps={{ maxLength: "14" }}
                required
              />
            </FormControl>
            <ContainerInput onSubmit={handleProducts}>
              <FormControl>
                <InputLabel htmlFor="code">Código do produto</InputLabel>
                <Input
                  id="code"
                  label="Código do produto"
                  type="text"
                  variant="outlined"
                  value={code}
                  onChange={handleInput}
                  required
                />
              </FormControl>

              <div className="unit-value">
                <h2>Valor unitário</h2>
                {productList &&
                  productList.map((p) => {
                    return (
                      <p>
                        {parseInt(p.cost_per_item).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    );
                  })}
              </div>
              <div className="total-value">
                <h2>Total do item</h2>
                {productList &&
                  productList.map((p, index) => {
                    return (
                      <p key={index}>
                        {p.cost_total
                          ? parseInt(p.cost_total).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })
                          : (0.0).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                      </p>
                    );
                  })}
              </div>
            </ContainerInput>

            <ContainerImage>
              <img src={shoppingCart} />
            </ContainerImage>
          </div>
          <div className="container">
            <ContainerScreen>
              <Screen>
                <header className="header">
                  <h2>Lista de produtos</h2>
                </header>
                <table>
                  <tr>
                    <td>
                      <h4>N° item</h4>
                    </td>
                    <td>
                      <h4>Código</h4>
                    </td>
                    <td>
                      <h4>Descrição</h4>
                    </td>
                    <td>
                      <h4>Qtd</h4>
                    </td>
                    <td>
                      <h4>Vlr. unit.</h4>
                    </td>
                    <td>
                      <h4>Total</h4>
                    </td>
                  </tr>
                  {productList &&
                    productList.map((p, index) => {
                      arrayTotal.push(parseInt(p.cost_total));

                      return (
                        <tr key={index}>
                          <td>{p.id}</td>
                          <td>{p.bar_code}</td>
                          <td>{p.product_name}</td>
                          <td>{p.total ? p.total : 1}</td>
                          <td>
                            {parseInt(p.cost_per_item).toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </td>
                          <td>
                            {p.cost_total
                              ? parseInt(p.cost_total).toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })
                              : (0.0).toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                          </td>
                        </tr>
                      );
                    })}
                </table>
              </Screen>
              <ContainerSubTotalDiscount>
                <div className="sub-total-discount">
                  <header className="header">
                    <h2>SubTotal</h2>
                  </header>
                  <h3>
                    {arrayTotal.length === 0
                      ? (0.0).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : parseInt(
                          arrayTotal.reduce(
                            (total, currentElement) => total + currentElement
                          )
                        ).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                  </h3>
                </div>
                <div className="sub-total-discount">
                  <header className="header">
                    <h2>Desconto</h2>
                  </header>
                  <h3>0%</h3>
                </div>
              </ContainerSubTotalDiscount>
              <Button
                variant="contained"
                style={{
                  color: "var(--white)",
                  backgroundColor: "var(--green)",
                  fontWeight: "bold",
                }}
                onClick={() => handleSale()}
              >
                Finalizar venda
              </Button>
            </ContainerScreen>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Pdv;
