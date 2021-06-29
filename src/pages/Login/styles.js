import styled, { keyframes } from "styled-components";
import bgImg from "../../assets/bg.jpg";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    filter: blur(4px);
    z-index: -1;
  }
`;

export const loginAnimation = keyframes`
  0%{
    top:-250px;
    opacity:0;
    transform:scale(.01) rotate(90deg);
  }
  100%{
    top:0px;
    opacity:1;
    transform:scale(1) rotate(0deg);
  }
`;

export const ContainerLogin = styled.div`
  animation: ${loginAnimation} 0.5s;
  width: 30%;
  height: 100%;
  min-width: 300px;
  max-width: 800px;
  align-items: flex-start;
  display: flex;
  text-align: center;
  padding: 30px 50px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px black;
  align-self: flex-end;
  background-color: var(--light);

  @media(max-width: 760px) {
    width: 100%;
  }
`;

export const ImageLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px 0px 0px 4px;
  padding: 10px;

  > img {
    width: 200px;
    border-radius: 50%;
    box-shadow: 5px 5px 5px var(--darkGray);
  }
`;

export const FormLogin = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  border-radius: 0px 4px 4px 0px;
  overflow: hidden;
  gap:40px;
`;

export const Header = styled.header`
  width: 100%;
  padding: 20px;

  > h1 {
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: black;
  }
`;

export const Body = styled.section`
  padding: 30px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ButtonLogin = styled(Button)`
  width: 100%;
  background-color: blue;
  color: var(--white);
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    flex: 1;
  }
`;
