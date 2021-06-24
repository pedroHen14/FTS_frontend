import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  TextField,
} from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-x: hidden;
  background-color: var(--primary);

  .expandedClose {
    transform: rotate(270deg);
  }

  .expandedOpen {
    transform: rotate(90deg);
  }
`;

export const Header = styled.header`
  display: flex;
  height: 100px;
  transition: 0.4s all;
  width: 100%;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: center;
  position: fixed;
  z-index: 999;

  a {
    font-weight: bold;
    font-size: 20px;

    :hover {
      color: var(--secondary);
    }
  }
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
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-top: 30px;

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
  align-items: center;
  gap: 100px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const DescriptionContent = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: var(--dark);
  justify-content: center;
  align-items: center;

  p {
    width: 60%;
    font-size: 30px;
    text-align: center;
    font-style: serif;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 600px;
  flex-direction: column;
`;

export const FeaturesHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;

  strong {
    color: var(--secondary);
  }
`;

export const FeaturesContent = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  gap: 20px;

  .mvv-container-card {
    height: 300px;
    width: 100%;
    background-color: var(--white);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 100px;
  }

  .mvv-card-content {
    display: flex;
    gap: 100px;
  }

  .mvv-card {
    height: 400px;
    width: 300px;
    border-radius: 10px;
    background-color: var(--light);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    text-align: center;
    font-size: 20px;
    color: var(--dark);
    border: 5px solid var(--secondary);
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  width: 60%;
  height: 500px;
  flex-direction: column;
  padding: 10px 0px;
  margin-top: 50px;
`;

export const InfosHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 5px solid var(--white);
  align-items: center;
  justify-content: center;

  h1 {
    margin: 5px 0px;
  }
`;

export const InfosContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
  align-items: center;
`;

export const InfosCardContainer = styled.div`
  display: flex;
  width: 50%;
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const InfosCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--light);
  text-align: center;
  font-size: 25px;
  padding: 20px;
  color: var(--dark);
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 5px solid var(--secondary);

  strong {
    color: var(--secondary);
  }

  @media (max-width: 1280px) {
    font-size: 20px;
  }
`;

export const PlansContainer = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const PlansCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;

  .aberto {
    height: 50vh;
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PlansCardNada = styled(Card)`
  min-width: 345px;

  min-height: 50vh;
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const PlansCardHeader = styled(CardHeader)``;

export const PlansCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

export const PlansCardContent = styled(CardContent)`
  height: inherit;
`;

export const PlansCardFooter = styled(CardActions)`
  border-bottom: 5px solid var(--dark);
  justify-content: space-between;
  display: flex;
`;

export const PlansCardList = styled(List)`
  width: 100%;
`;

export const PlansCardListItem = styled(ListItem)``;

export const PlansCardListItemIcon = styled(ListItemIcon)``;

export const PlansCardListItemText = styled(ListItemText)``;

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;

  .info-footer {
    display: flex;
    width: 100%;
    height: 5vh;
    background-color: var(--dark);

    align-items: center;
    justify-content: center;
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--secondary);
  height: 30vh;
  padding: 20px;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const FooterInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardFormContainer = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  padding: 10px;
`;

export const Input = styled(TextField)`
  flex: 1;
`;
