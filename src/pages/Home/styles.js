import styled from "styled-components";
import { Chart } from "react-google-charts";

export const Container = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 30px;

  .graphic {
    display: flex;
    width: 30%;
    height: 100%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  height: 100%;

  .container_graphic{
    display:flex;
    
    *{
      flex: 1;
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  width: 80%;
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

export const GraphicChart = styled(Chart)`
  width:30vw;
  height:40vh;
`;
