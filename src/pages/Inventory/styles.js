import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media (max-width: 1280px) {
    gap: 10px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-items: center;
  height: 80%;
  align-items: center;
  width: 70%;
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

  @media (max-width: 1280px) {
    gap:10px;
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

export const ContainerListLogbook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--black);
  width: 100%;
  gap: 20px;
  min-height: 300px;

  table {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid var(--dark);
    border-radius: 10px;
    overflow: auto;
    align-items: center;
    justify-content: center;
    padding: 30px;
    max-height: 400px;
    min-width: 500px;
  }

  tr {
    display: flex;
    gap: 10px;
  }

  td {
    width: 200px;
    text-align: center;
  }
`;
