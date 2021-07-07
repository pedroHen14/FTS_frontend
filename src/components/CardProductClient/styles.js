import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 40vh;
  display: flex;
  border-radius: 20px;
  background-color: ${props => props.lightColor};
  padding: 20px;
  color: black;
  justify-content: space-between;
  gap: 20px;

  .card-image {
    img{
      max-width: 150px;
    }
  }

  .swiper-container {
    width: 75%;
    padding: 50px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 10px #c0c0c0c0;
    border-radius: 20px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 250px;
    border-radius: 20px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 200px;
  }

  .swiper-slide img {
    display: block;
    width: 200px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  justify-content: space-between;
  align-items: center;
`;

export const InfoHeader = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: flex-start;
  padding: 10px 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  justify-content: flex-start;
  padding: 10px 0;
  gap:20px;
  align-items: center;

  p {
    text-align: center;
  }
`;
