import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
  width: 50vw;
  height: 60vh;
  display: flex;
  border-radius: 20px;
  background-color: var(--light);
  padding: 20px;
  color: black;

  .swiper-container {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .card-image {
      width: 80%;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 5px 5px 5px #c0c0c0;
      background-color: white;
      border-radius: 20px;
    }

    img {
      width: 150px;
    }
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

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  justify-content: flex-start;
  padding: 10px 0;
  align-items: center;

  p {
    text-align: center;
  }
`;
