import { Button, Table, TextField } from "@material-ui/core";
import styled from "styled-components";

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

  .icon-edit {
    transition: all 0.4s;

    :hover {
      color: var(--secondary);
    }

    :active {
      transform: scale(0.9);
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-items: center;
  min-height: 30vh;
  align-items: center;
  width: 60vw;
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

export const Input = styled(TextField)`
  flex: 1;
`;

export const ButtonRegister = styled(Button)`
  width: 50%;
  margin-top: 20px;
  border-radius: 10px;
`;

export const TableList = styled(Table)`
  th {
    background-color: var(--dark);
    color: var(--white);
  }
`;
