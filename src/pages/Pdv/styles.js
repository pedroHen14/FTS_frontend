import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: white;

  .keyboard_shortcut_container{
    display:flex;
    background-color: var(--light);
    flex-direction: column;
    padding:10px;
    color: var(--dark);
    border-radius: 10px;
    border: 1px solid var(--dark);
    gap:10px;
    align-items: center;
    justify-content:center;

    .keyboard_shortcut_description_container {
      display:flex;
      justify-content:center;
      text-align: center;
      gap:10px;
      align-items: center;

      div{
        display:flex;
        flex-direction:column;
        gap:5px;
      }

      p{
        background-color: var(--dark);
        padding:5px;
        color:var(--white);
        border-radius: 5px;
        font-weight: bold;
      }
    }
  }

  .discount_container{
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
  }
`;

export const Header = styled.header`
  display: flex;
  height: 10vh;
  width: 100%;
  align-items: center;
  color: white;
  justify-content: space-between;
  background-color: var(--primary);
  padding: 0px 20px;
`;

export const IconUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const ImageLogo = styled.img`
  width: 60px;
  border-radius: 50%;
  border: 2px solid var(--light);
  cursor: pointer;
  transition: all .4s;

  :hover{
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  gap: 20px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    justify-content: center;
  }
`;

export const ButtonRegister = styled(Button)`
  width: 50%;
  margin-top: 20px;
  border-radius: 10px;
  color: var(--white);
`;

export const ContainerInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  align-items: flex-start;
  font-size: 20px;
  gap: 50px;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-items: flex-start;
  height: 80%;
  align-items: center;
  width: 300px;
  color: white;
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

export const ContainerFormModal = styled.div`
  display: flex;
  justify-items: flex-start;
  height: 90%;
  align-items: center;
  width: 300px;
  color: white;
`;

export const FormRegisterModal = styled.form`
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

export const ContainerSubTotalDiscount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    display: flex;
    max-width: 350px;
    min-width: 250px;
    min-height: 250px;
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
