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
  height: 15vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--primary);
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  border: 5px solid var(--dark);
`;

export const Content = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
`;
