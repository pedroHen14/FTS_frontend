import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: center;
  background-color: var(--primary);
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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
  }
`;

export const IconUser = styled.div`
  display: flex;
  justify-self: flex-end;
  flex: 1;
  justify-content: flex-end;
  font-size: 30px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;

  img {
    fill: white;
    width: 100%;
  }
`;
