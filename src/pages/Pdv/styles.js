import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: grid;

  padding: 20px;
  gap: 20px;
  grid-template-areas:
    "container-image container-input"
    "container-screen container-screen";
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: flex-start;
  gap: 20px;
  grid-area: "container-input";
`;

export const ContainerScreen = styled.div`
  display: flex;
  align-items: center;
  grid-area: "container-screen";
  justify-items: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: "container-image";

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

export const ScreenHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark);
  width: 100%;
  color: white;
  padding: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
