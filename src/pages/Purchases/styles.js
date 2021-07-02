import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    justify-content: space-around;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 10%;
  justify-content: center;
  border-bottom: 1px solid black;
  width: 100%;
`;

export const ContainerForm = styled.form`
  display: flex;
  justify-items: center;
  height: 20%;
  align-items: center;
  width: 50%;
`;

export const ButtonRegister = styled(Button)`
  width: 50%;
  margin-top: 20px;
  border-radius: 10px;
`;

export const Input = styled(TextField)`
  flex: 1;
`;

export const ContainerScreen = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  max-width: 700px;
  color: black;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dark);
    width: 100%;
    color: white;
    border-radius: 5px;
    padding: 10px;
  }

  .sub-total-discount {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: var(--light);
    border: 1px solid var(--dark);
    width: 100%;

    h3 {
      font-size: 30px;
      padding: 10px;
    }
  }
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--light);
  border-radius: 10px;
  border: 1px solid var(--dark);
  width: 100%;
  gap: 20px;
  height: 400px;

  table {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
    padding: 10px;
    max-height: 400px;
    min-width: 500px;
  }

  td {
    width: 100px;
    text-align: center;
  }
`;

export const ContainerSubTotalDiscount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
