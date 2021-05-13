import React, { useState } from "react";

import {
  Container,
  ContainerButton,
  ContainerImage,
  ContainerInput,
  ContainerScreen,
  ContainerSubTotalDiscount,
  Content,
  Footer,
  Header,
  ImageLogo,
  Screen,
  ScreenHeader,
  TotalSub,
} from "./styles";
import imageLogo from "../../assets/FTS.png";
import shoppingCart from "../../assets/shopping-cart.png";
import Modal from "../../components/Modal";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect } from "react";

function Pdv() {
  const [code, setCode] = useState("");
  const [openModalDiscount, setOpenModalDiscount] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();

    setCode(e.target.value);

    console.log(code);
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
      default:
        break;
    }
  });

  return (
    <>
      <Container>
        {openModalDiscount && (
          <Modal
            title="Desconto"
            handleClose={() => setOpenModalDiscount(false)}
          />
        )}
        <Header>
          <ImageLogo src={imageLogo} />
          <h1>Caixa aberto</h1>
        </Header>
        <Content>
          <div className="container">
            <ContainerInput>
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
                <p>R$ 0,00</p>
              </div>
              <div className="total-value">
                <h2>Total do item</h2>
                <p>R$ 0,00</p>
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
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>372513</td>
                    <td>Coca cola 350ml</td>
                    <td>10</td>
                    <td>R$ 5,00</td>
                    <td>R$ 50,00</td>
                  </tr>
                </table>
              </Screen>
              <ContainerSubTotalDiscount>
                <div className="sub-total-discount">
                  <header className="header">
                    <h2>SubTotal</h2>
                  </header>
                  <h3>R$ 180,00</h3>
                </div>
                <div className="sub-total-discount">
                  <header className="header">
                    <h2>Desconto</h2>
                  </header>
                  <h3>10%</h3>
                </div>
              </ContainerSubTotalDiscount>
            </ContainerScreen>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Pdv;
