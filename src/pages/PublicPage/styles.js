import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-x: hidden;
  background-color: var(--primary);
`;

export const Header = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: flex-end;
  flex: 3;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  flex: 1;
  justify-content: center;

  img {
    width: 100px;
    border-radius: 50%;
    border: solid 2px var(--light);
    box-shadow: 5px 5px 5px var(--dark);
  }
`;

export const IconUser = styled.div`
  display: flex;
  justify-self: flex-end;
  flex: 1;
  justify-content: flex-end;
  font-size: 30px;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100vh;
  justify-content: flex-end;
  align-items: center;
  color: black;
  position: relative;
  margin: 50px auto;

  div:first-child {
    position: absolute;
    left: 0;
  }

  div:last-child {
    display: flex;
    position: absolute;
    justify-content: center;
    top: 200px;
    background-color: var(--light);
    align-items: flex-start;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px 10px 10px 0px;
    gap: 10px;
  }
`;

export const TriangleTop = styled.div`
  width: 0;
  height: 0;
  border-right: 99vw solid transparent;
  border-bottom: 100px solid var(--dark);
`;

export const TriangleBottom = styled.div`
  width: 0;
  height: 0;
  border-right: 99vw solid transparent;
  border-top: 100px solid var(--dark);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: var(--dark);
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  font-style: serif;

  p {
    width: 60%;
  }
`;
