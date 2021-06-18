import React from "react";
import CardProductClient from "../../components/CardProductClient";

import {
  BodyContainer,
  CompanyContainer,
  CompanyContent,
  Container,
  DescriptionContainer,
  FooterContainer,
  FooterCopyright,
  FooterInfoCenter,
  FooterInfoLeft,
  FooterInfoLeftContent,
  FooterInfoLeftHeader,
  FooterInfoRight,
  FooterInfoRightContent,
  FooterInfoRightHeader,
  FooterInfosContainer,
  HeaderContainer,
  HeaderMenu,
  ImageLogo,
  OtherProductsCard,
  OtherProductsCardContainer,
  OtherProductsContainer,
  OtherProductsContent,
  OtherProductsHeader,
  PopularProductsContainer,
  PopularProductsContent,
  PopularProductsHeader,
  ProductsContainer,
} from "./styles";

import { RiWhatsappLine } from "react-icons/ri";

import imageLogo from "../../assets/FTS.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function ClientPage() {
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
      <HeaderContainer>
        <ImageLogo>
          <img src={imageLogo} alt="" />
        </ImageLogo>
        <HeaderMenu>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </HeaderMenu>
      </HeaderContainer>
      <BodyContainer>
        <CompanyContainer>
          <CompanyContent>
            <h1>Nome da empresa</h1>
          </CompanyContent>
        </CompanyContainer>
        <ProductsContainer>
          <h1>Nossos Produtos</h1>
        </ProductsContainer>
        <PopularProductsContainer>
          <PopularProductsHeader>
            <h1>Produtos populares</h1>
          </PopularProductsHeader>
          <PopularProductsContent>
            <CardProductClient />
          </PopularProductsContent>
        </PopularProductsContainer>
        <OtherProductsContainer>
          <OtherProductsHeader>
            <h1>Outros Produtos</h1>
          </OtherProductsHeader>
          <OtherProductsContent>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              className="mySwiper"
            >
              {arrayProducts.map((p) => (
                <SwiperSlide>
                  <div>
                    <img src={p.url} alt={p.name} />
                  </div>
                  <h3>{p.name}</h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </OtherProductsContent>
        </OtherProductsContainer>
      </BodyContainer>
      <FooterContainer>
        <FooterInfosContainer>
          <FooterInfoLeft>
            <FooterInfoLeftHeader>
              <h1>Contato</h1>
            </FooterInfoLeftHeader>
            <FooterInfoLeftContent>
              <span>(11) 99999-9999</span>
              <span>(11) 99999-9999</span>
              <span>(11) 99999-9999</span>
              <span>(11) 99999-9999</span>
            </FooterInfoLeftContent>
          </FooterInfoLeft>
          <FooterInfoCenter>
            <h1>Nome da empresa</h1>
          </FooterInfoCenter>
          <FooterInfoRight>
            <FooterInfoRightHeader>
              <RiWhatsappLine size={40} />
              <RiWhatsappLine size={40} />
              <RiWhatsappLine size={40} />
            </FooterInfoRightHeader>
            <FooterInfoRightContent>
              <h2>Encontre nossa loja</h2>
              <p>Av. Doutor Jorge, 525</p>
            </FooterInfoRightContent>
          </FooterInfoRight>
        </FooterInfosContainer>
        <FooterCopyright>
          <p>Flow Trading System | 2021</p>
        </FooterCopyright>
      </FooterContainer>
    </Container>
  );
}

export default ClientPage;
