import React from "react";

import {
  Container,
  InfoContainer,
  InfoHeader,
  SliderContainer,
  CardProduct,
  InfoContent,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function CardProductClient() {
  return (
    <Container>
      <InfoContainer>
        <InfoHeader>
          <div></div>
        </InfoHeader>
        <InfoContent>
          <h1>Seu Produto</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </InfoContent>
      </InfoContainer>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
          hideOnClick: false,
        }}
        className="mySwiper"
        style={{
          width: "400px",
          height: "auto",
        }}
      >
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-container">
          <div className="card-image">
            <img
              src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1685908060"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default CardProductClient;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";

// // import Swiper core and required modules
// import SwiperCore, { Pagination } from "swiper/core";

// // install Swiper modules
// SwiperCore.use([Pagination]);

// function CardProductClient() {
//   return (
//     <>
//       <Swiper
//         direction={"vertical"}
//         pagination={{
//           clickable: true,
//         }}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
// export default CardProductClient;
