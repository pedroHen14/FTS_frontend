import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

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

export const ContainerForm = styled.div`
  display: flex;
  justify-items: flex-start;
  height: 90%;
  align-items: center;
  width: 70%;
`;

export const FormRegister = styled.form`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ButtonRegister = styled(Button)`
  width: 30%;
  margin-top: 20px;
  border-radius: 10px;
`;
