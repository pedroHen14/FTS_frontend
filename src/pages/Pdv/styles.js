import { FullScreen } from "react-full-screen";
import styled from "styled-components";

export const Container = styled(FullScreen)`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const Header = styled.header`
  display: flex;
  height: 10vh;
  width: 100%;
  align-items: center;
  color: white;
  justify-content: space-around;
  position: relative;
  background-color: var(--primary);
`;

export const ImageLogo = styled.img`
  width: 100px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50px;
  border: 2px solid var(--dark);
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
    gap: 10px;
    justify-content: space-around;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  align-items: flex-start;
  font-size: 20px;
  gap: 20px;
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
  justify-content: space-around;
  background-color: var(--light);
  border-radius: 10px;
  border: 1px solid var(--dark);

  width: 100%;
  gap: 20px;
  min-height: 300px;

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
