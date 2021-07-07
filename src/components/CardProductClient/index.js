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

function CardProductClient({siteData}) {
  const arrayProducts = [
    {
      id: 1,
      url: "https://images8.kabum.com.br/produtos/fotos/101288/microfone-gamer-hyperx-quadcast-antivibracao-led-preto-e-vermelho-hx-micqc-bk_1615553162_m.jpg",
      name: "Microfone HyperX",
    },
    {
      id: 2,
      url: "https://images2.kabum.com.br/produtos/fotos/115582/smart-tv-led-50-4k-uhd-lg-4-hdmi-2-usb-wi-fi-bluetooth-thinq-ai-hdr-50un7310-_1596033073_m.jpg",
      name: "TV Smart LG",
    },
    {
      id: 3,
      url: "https://images3.kabum.com.br/produtos/fotos/95803/95803_1522867513_index_m.jpg",
      name: "HD Seagate 1TB",
    },
    {
      id: 4,
      url: "https://images5.kabum.com.br/produtos/fotos/148655/placa-de-video-zotac-gaming-geforce-rtx-3060-twin-edge-oc-15-gbps-12gb-gddr6-ray-tracing-zt-a30600h-10m_1613993479_m.jpg",
      name: "Placa de Vídeo RTX 3060",
    },
    {
      id: 5,
      url: "https://images6.kabum.com.br/produtos/fotos/155486/smartphone-samsung-galaxy-m12-64gb-4gb-ram-octa-core-camera-quadrupla-5000mah-preto-sm-m127fzkszto_1622118086_m.jpg",
      name: "Celular Galaxy M12",
    },
    {
      id: 6,
      url: "https://images1.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_m.jpg",
      name: "Xbox One S",
    },
  ];

  return (
    <Container>
      <InfoContainer>
        <InfoHeader>
          <img src={siteData.logo_img} alt="" />
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
        {arrayProducts.map((p, index) => (
          <SwiperSlide key={index}>
            <div className="card-image">
              <img src={p.url} alt={p.name} title={p.name} />
            </div>
          </SwiperSlide>
        ))}
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
