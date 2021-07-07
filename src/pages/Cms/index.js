import {
  Input,
  InputLabel,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import Dashboard from "../../layouts/Dashboard";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
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
  const user = getUser();

  const [register, setRegister] = useState({
    slogan: "",
    primaryColor: "",
    secondaryColor: "",
    lightColor: "",
    darkColor: "",
  });

  const [reload, setReload] = useState(0);

  const [logoImg, setLogoImg] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);

  const bannerRef = useRef();
  const logoRef = useRef();

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };
  const handleWebsite = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("logo", logoImg);
    form.append("banner", bannerImg);
    form.append("slogan", register.slogan);
    form.append("primary_color", register.primaryColor);
    form.append("secondary_color", register.secondaryColor);
    form.append("dark_color", register.darkColor);
    form.append("light_color", register.lightColor);

    try {
      await api.post(`/site/company/${user.id}`, form);

      handleReload(e);
    } catch (error) {
      notify('não foi possível cadastrar o produto', 'error');
    }
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
        console.log(e.target.files[0]);
        setLogoImg(e.target.files[0]);
        break;
      case "bannerImg":
        if (e.target.files[0]) {
          bannerRef.current.src = URL.createObjectURL(e.target.files[0]);
          bannerRef.current.style.display = "flex";
        } else {
          bannerRef.current.src = "";
          bannerRef.current.style.display = "none";
        }
        console.log(e.target.files[0]);
        setBannerImg(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleReload = (e) => {
    setRegister({
      slogan: "",
      primaryColor: "",
      secondaryColor: "",
      lightColor: "",
      darkColor: "",
    });

    setLogoImg(null);
    setBannerImg(null);

    setReload(Math.random());
  };

  return (
    <Dashboard title="CMS">
      <Container>
        <ContainerForm>
          <FormRegister onSubmit={handleWebsite}>
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
                <InputLabel htmlFor="">Cor clara</InputLabel>
                <input
                  id="lightColor"
                  label="Cor clara"
                  type="color"
                  value={register.lightColor}
                  onChange={handleInput}
                  required
                />
              </InputColor>
              <InputColor>
                <InputLabel htmlFor="">Cor escura</InputLabel>
                <input
                  id="darkColor"
                  label="Cor escura"
                  type="color"
                  value={register.darkColor}
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
                    placeholder="Logo"
                  />
                  <img alt="Pré-visualização" ref={logoRef} />
                </div>

                <div className="div">
                  <Input
                    id="bannerImg"
                    label="Banner"
                    type="file"
                    placeholder="Banner"
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
