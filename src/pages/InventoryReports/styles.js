import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.4s;
`;

export const ButtonCard = styled(Card)`
  width: 345px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s;

  :hover {
    transition: all 0.4s;
    transform: scale(1.1);
  }

  :active {
    transform: scale(1);
  }

  #day-report {
    background-color: red;
  }

  #week-report {
    background-color: blue;
  }

  #month-report {
    background-color: green;
  }
`;

export const ButtonActionArea = styled(CardActionArea)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonImageContainer = styled(CardMedia)`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px var(--dark);
`;

export const ButtonContent = styled(CardContent)`
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  height: 150px;

  h3 {
    text-transform: uppercase;
    font-size: 25px;
  }
`;
