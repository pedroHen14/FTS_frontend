import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  color: var(--black);
  align-items: center;
  /* justify-content: center; */
`;

export const Header = styled.header`
  display: flex;
  height: 100px;
  transition: 0.4s all;
  width: 100%;
  justify-content: space-evenly;
  padding: 0px 50px;
  align-items: center;
  position: fixed;
  z-index: 999;
  background-color: ${props => props.secondaryColor};

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
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  img {
    width: 100px;
    border-radius: 10%;
    border: solid 2px var(--light);
    box-shadow: 5px 5px 5px var(--dark);
  }
`;

export const ImageLogo = styled.div`
  width: 100px;
  height: 100px;
  z-index: 99;

  img {
    width: 100px;
    border-radius: 20px;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    text-decoration: none;
    gap: 50px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
  margin-top: 100px;
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: var(--white);

  background-image: url(${(props) => props.banner});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const CompanyContent = styled.div`
  display: flex;
  padding: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.primaryColor};
  border-radius: 20px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  h1 {
    width: 70%;
    border-bottom: 1px solid black;
    text-align: center;
  }
`;

export const PopularProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  align-items: center;
  justify-content: space-around;

  :last-child{
    margin-bottom: 20vh;
  }
`;

export const PopularProductsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  h1 {
    width: 70%;
    border-bottom: 1px solid black;
    text-align: center;
  }
`;

export const PopularProductsContent = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  background-color: var(--grayLight);
  align-items: center;
  justify-content: center;
`;

export const OtherProductsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 50vh;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20vh;
`;

export const OtherProductsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const OtherProductsContent = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--grayLight);
  height: 40vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  color: var(--white);

  .swiper-container {
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .swiper-slide {
    display: flex;
    width: 250px;
    height: 250px;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: var(--black);

    div {
      box-shadow: 5px 5px 5px var(--dark);
      width: 250px;
      height: 300px;
      background-color: white;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 150px;
      }
    }
  }
`;

export const OtherProductsCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const OtherProductsCard = styled.div`
  display: flex;
  width: 250px;
  height: 200px;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  div {
    width: 100%;
    height: 100%;
    background-color: red;
    border-radius: 20px;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 40vh;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.secondaryColor};
  color: var(--white);
`;

export const FooterInfosContainer = styled.div`
  display: flex;
  height: 35vh;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  > div {
    flex: 1;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  background-color: ${props => props.darkColor};
  justify-content: center;
  align-items: center;
`;

export const FooterInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoLeftHeader = styled.div``;

export const FooterInfoLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const FooterInfoCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const FooterInfoRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
