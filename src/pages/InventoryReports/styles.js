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
`;

export const Body = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;
