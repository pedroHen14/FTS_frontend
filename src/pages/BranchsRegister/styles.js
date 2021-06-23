import { Button, Table, TextField } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-items: flex-start;
  height: 80%;
  align-items: center;
  border-bottom: 2px solid var(--black);
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
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Input = styled(TextField)`
  flex: 1;
`;

export const ButtonRegister = styled(Button)`
  width: 50%;
  margin-top: 20px;
  border-radius: 10px;
`;

export const TableList = styled(Table)`
  border: solid 2px var(--dark);

  th {
    background-color: var(--dark);
    color: var(--white);
  }
`;
