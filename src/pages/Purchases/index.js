import {
  ContainerForm,
  ContainerScreen,
  ContainerSubTotalDiscount,
  Input,
  Container,
  Screen,
} from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
import Dashboard from "../../layouts/Dashboard";
import { ToastContainer } from "react-toastify";
import { Button } from "@material-ui/core";
import { notify } from "../../utils";

function Purchases() {
  const user = getUser();

  const [code, setCode] = useState("");
  const [productList, setProductList] = useState([]);

  const [reload, setReload] = useState(null);

  useEffect(() => {
    console.log(user);
  }, [reload]);

  const handleInput = (e) => {
    e.preventDefault();

    setCode(e.target.value);
  };

  const handleReload = (e) => {
    setProductList([]);

    setReload(Math.random());
  };

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
  const handleSale = async (e) => {
    const productsSale = productList.map((p) => {
      const items = {
        product_id: p.id,
        quantity: p.total,
      };
      return items;
    });

    const company_id = user.branch.company_id;

    try {
      await api.post("/purchase", {
        payment_method_id: 1,
        branch_id: parseInt(company_id),
        items: productsSale,
      });

      handleReload(e);
      notify("Compra realizada com sucesso", "success");
    } catch (error) {
      notify("A compra não foi concluída", "error");
    }
  };
  const arrayTotal = [];

  return (
    <Dashboard title="Compras">
      <ToastContainer style={{ color: "white" }} />
      <Container>
        <ContainerForm onSubmit={handleProducts}>
          <Input
            id="code"
            label="Código do produto"
            type="text"
            variant="outlined"
            value={code}
            onChange={handleInput}
            required
          />
        </ContainerForm>

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
      </Container>
    </Dashboard>
  );
}

export default Purchases;
