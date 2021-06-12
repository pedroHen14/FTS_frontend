import {
  Container,
  ContainerLogin,
  FormLogin,
  ImageLogin,
  Header,
  Body,
  ButtonLogin,
} from "./styles";

import imgLogo from "../../assets/FTS.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import formatCpf from "@brazilian-utils/format-cpf";
import formatCnpj from "@brazilian-utils/format-cnpj";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function Login() {
  const history = useHistory();

  const [login, setLogin] = useState({
    cpf_cnpj: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const notify = () => {
    toast.error("Usuário/senha incorretos!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("session", {
        cnpj_ou_cpf:
          login.cpf_cnpj.length < 15
            ? login.cpf_cnpj.replace(/[^0-9]+/g, "")
            : login.cpf_cnpj.replace(/\D/g, ""),
        password: login.password,
      });

      signIn(response.data);

      history.push("/home");
    } catch (error) {
      notify();
      console.error(error);
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <Container>
      <ToastContainer style={{ color: "white" }} />
      <ContainerLogin>
        <ImageLogin>
          <img src={imgLogo} alt="logo" />
        </ImageLogin>

        <FormLogin onSubmit={handleSubmit}>
          <Header>
            <h1>Faça o Login</h1>
          </Header>
          <Body>
            <TextField
              id="cpf_cnpj"
              label="CPF/CNPJ"
              variant="standard"
              type="text"
              value={
                login.cpf_cnpj.length < 15
                  ? formatCpf(login.cpf_cnpj)
                  : formatCnpj(login.cpf_cnpj)
              }
              onChange={handleInput}
              required
            />

            <FormControl>
              <InputLabel htmlFor="standard-adornment-password">
                Senha
              </InputLabel>
              <Input
                id="password"
                label="Senha"
                variant="standard"
                type={showPassword ? "text" : "password"}
                value={login.password}
                onChange={handleInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                required
              />
            </FormControl>

            <ButtonLogin
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--secondary)",
              }}
            >
              Entrar
            </ButtonLogin>
          </Body>
        </FormLogin>
      </ContainerLogin>
    </Container>
  );
}

export default Login;
