import {
  Input,
  InputLabel,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import Dashboard from "../../layouts/Dashboard";
import { notify } from "../../utils";
import {
  ContainerInput,
  FormRegister,
  ContainerForm,
  Container,
  ButtonRegister,
  InputColor,
} from "./styles";

function Cms() {
  const [register, setRegister] = useState({
    slogan: "",
    primaryColor: "",
    secondaryColor: "",
    lightColor: "",
    contact: {
      phone: "",
      cellPhone: "",
    },
    address: {
      cep: "",
      street: "",
      district: "",
      place_number: "",
      city: "",
    },
  });

  const [image, setImage] = useState(null);

  const bannerRef = useRef();
  const logoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      notify("Cadastro de conteúdo falhou", "error");
    }
  };

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };

  const handleImage = (e) => {
    switch (e.target.id) {
      case "logoImg":
        if (e.target.files[0]) {
          logoRef.current.src = URL.createObjectURL(e.target.files[0]);
          logoRef.current.style.display = "flex";
        } else {
          logoRef.current.src = "";
          logoRef.current.style.display = "none";
        }
        setImage(e.target.files[0]);
        break;
      case "bannerImg":
        if (e.target.files[0]) {
          bannerRef.current.src = URL.createObjectURL(e.target.files[0]);
          bannerRef.current.style.display = "flex";
        } else {
          bannerRef.current.src = "";
          bannerRef.current.style.display = "none";
        }
        setImage(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  return (
    <Dashboard title="CMS">
      <Container>
        <ContainerForm>
          <FormRegister onSubmit={handleSubmit}>
            <ContainerInput>
              <TextareaAutosize
                id="slogan"
                placeholder="Digite aqui o slogan do seu site..."
                rowsMin={5}
                rowsMax={10}
                value={register.slogan}
                onChange={handleInput}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <InputColor>
                <InputLabel htmlFor="">Cor primária</InputLabel>
                <input
                  id="primaryColor"
                  type="color"
                  value={register.primaryColor}
                  onChange={handleInput}
                  required
                />
              </InputColor>

              <InputColor>
                <InputLabel htmlFor="">Cor secundária</InputLabel>
                <input
                  id="secondaryColor"
                  type="color"
                  value={register.secondaryColor}
                  onChange={handleInput}
                  required
                />
              </InputColor>

              <InputColor>
                <InputLabel htmlFor="">Cor light</InputLabel>
                <input
                  id="lightColor"
                  label="Cor light"
                  type="color"
                  value={register.lightColor}
                  onChange={handleInput}
                  required
                />
              </InputColor>
              <div className="container-input-image">
                <div className="div">
                  <Input
                    id="logoImg"
                    label="Logo"
                    type="file"
                    ref={logoRef}
                    onChange={handleImage}
                  />
                  <img alt="Pré-visualização" ref={logoRef} />
                </div>

                <div className="div">
                  <Input
                    id="bannerImg"
                    label="Banner"
                    type="file"
                    ref={bannerRef}
                    onChange={handleImage}
                  />
                  <img alt="Pré-visualização" ref={bannerRef} />
                </div>
              </div>
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
      </Container>
    </Dashboard>
  );
}

export default Cms;
