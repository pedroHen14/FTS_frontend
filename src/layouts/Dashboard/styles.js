import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
  height: 10%;
  border-bottom: 1px solid black;

  h1 {
    color: black;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  transition: all 0.4s;
`;

export const Body = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  overflow: hidden;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: black;
`;
