import styled from "styled-components";

export const Container = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
`;

export const InfoCard = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  background-color: var(--secondary);
  flex-direction: column;
  border-radius: 10px;
`;

export const InfoCardHeader = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  height: 20%;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
`;

export const InfoCardContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
