import React, { useState } from "react";

import {
  Container,
  ContainerButton,
  ContainerImage,
  ContainerInput,
  ContainerScreen,
  Content,
  Footer,
  Header,
  ImageLogo,
  Screen,
  ScreenHeader,
} from "./styles";
import imageLogo from "../../assets/FTS.png";
import shoppingCart from "../../assets/shopping-cart.png";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

function Pdv() {
  const [code, setCode] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    setCode(e.target.value);

    console.log(code);
  };

  return (
    <Container>
      <Header>
        <ImageLogo src={imageLogo} />
        <h1>Caixa aberto</h1>
      </Header>
      <Content>
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
            <h3>Valor unitário</h3>
            <p>R$ 0,00</p>
          </div>
          <div className="total-value">
            <h3>Total do item</h3>
            <p>R$ 0,00</p>
          </div>
        </ContainerInput>
        <ContainerImage>
          <img src={shoppingCart} />
        </ContainerImage>
        <ContainerScreen>
          <Screen>
            <ScreenHeader>
              <h2>Lista de produtos</h2>
            </ScreenHeader>
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
        </ContainerScreen>
      </Content>
      <ContainerButton>
        <Button variant="contained" color="primary">
          Cadastrar cliente
        </Button>
      </ContainerButton>
    </Container>
  );
}

export default Pdv;
