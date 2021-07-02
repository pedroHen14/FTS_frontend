import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (max-width: 1290px) {
    gap: 10px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-items: center;
  min-height: 30vh;
  align-items: center;
  width: 60vw;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;

  padding: 20px;
  align-items: center;
  color: black;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 10%;
  justify-content: center;
  border-bottom: 1px solid black;
  width: 100%;
`;

export const FormRegister = styled.form`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 10px;

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 1290px) {
    gap: 10px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const ButtonRegister = styled(Button)`
  width: 50%;
  margin-top: 20px;
  border-radius: 10px;
`;

export const Input = styled(TextField)`
  flex: 1;
`;
