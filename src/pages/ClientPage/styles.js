import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--black);
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-around;
  border-bottom: 1px solid black;
  padding: 30px;
  background-color: var(--secondary);
  color: var(--white);
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
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--primary);
`;

export const CompanyContent = styled.div`
  display: flex;
  width: 40%;
  height: 50%;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
  border-radius: 20px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  p {
    width: 70%;
    text-align: center;
  }
`;

export const PopularProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 50vh;
  justify-content: space-around;
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
  background-color: var(--dark);
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
  background-color: var(--dark);
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

    div {
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
  color: var(--white);
`;

export const FooterInfosContainer = styled.div`
  display: flex;
  height: 35vh;
  width: 100%;
  background-color: var(--dark);
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
  background-color: var(--secondary);
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
  align-items: center;
  gap: 10px;
`;

export const FooterInfoCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoRightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterInfoRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
