import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .container-input-image {
    display: flex;
    width: 100%;
    gap: 10px;

    .div {
      display: flex;
      flex: 1;
      gap: 10px;
      align-items: center;
      flex-direction: column;

      input {
        flex: 1;
      }

      img {
        align-self: center;
        max-width: 200px;
        display: none;
      }
    }
  }

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

  textarea {
    flex: 1;
    resize: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    border: 0;
    background-color: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    font-family: sans-serif;
    transition: all 0.4s;

    :focus {
      border: solid 2px var(--primary);
    }
  }
`;

export const Input = styled(TextField)`
  flex: 1;
`;

export const ButtonRegister = styled(Button)`
  width: 50%;
  margin-top: 20px;
  border-radius: 10px;
`;

export const InputColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  flex: 1;

  input {
    width: 150px;
    height: 100px;
    border: 0;
  }
`;
