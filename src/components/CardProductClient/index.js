import React from "react";

import {
  Container,
  InfoContainer,
  InfoHeader,
  InfoContent,
} from "./styles";

import imageLogo from "../../assets/FTS.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

function CardProductClient({siteData, products}) {

  return (
    <Container lightColor={siteData.light_color}>
      <InfoContainer>
        <InfoHeader>
          <img src={siteData.logo_img} alt="" />
        </InfoHeader>
        <InfoContent>
          <h1>{products.type}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </InfoContent>
      </InfoContainer>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        direction={"vertical"}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={
          (true,
          {
            clickable: true,
          })
        }
        className="mySwiper"
      >
        {products && products.Products.map((p, index) => (
          <SwiperSlide key={index}>
            <div className="card-image">
              <img src={p.image_url} alt={p.product_name} title={p.product_name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default CardProductClient;
