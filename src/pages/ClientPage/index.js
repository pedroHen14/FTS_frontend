import React, { useEffect, useState } from "react";
import CardProductClient from "../../components/CardProductClient";

import {
  BodyContainer,
  CompanyContainer,
  CompanyContent,
  Container,
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
import { api } from "../../services/api";

SwiperCore.use([Pagination]);

function ClientPage() {
  const [siteData, setSiteData] = useState({});

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

  useEffect(() => {
    const loadSite = async () => {
      try {
        const { data } = await api.get("/company/1/site");

        setSiteData(data);
        console.log(data);
      } catch (error) {}
    };
    loadSite();
  }, []);

  return (
    <Container primaryColor={siteData.primary_color}>
      <HeaderContainer secondaryColor={siteData.secondary_color}>
        <ImageLogo>
          <img src={siteData.logo_img} alt="" />
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
        <CompanyContainer banner={siteData.banner_img}>
          <CompanyContent primaryColor={siteData.primary_color}>
            <h1>{siteData.slogan}</h1>
          </CompanyContent>
        </CompanyContainer>
        <ProductsContainer>
          <h1>Nossos Produtos</h1>
          <OtherProductsContent>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              className="mySwiper"
            >
              {siteData.Company?.Products.map((p) => (
                <SwiperSlide>
                  <div>
                    <img src={p.image_url} alt={p.image_url} />
                  </div>
                  <h3>{p.product_name}</h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </OtherProductsContent>
        </ProductsContainer>
        <PopularProductsContainer>
          <PopularProductsHeader>
            <h1>Produtos populares</h1>
          </PopularProductsHeader>
          <PopularProductsContent>
            <CardProductClient siteData={siteData}/>
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
      <FooterContainer secondaryColor={siteData.secondary_color}>
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
        <FooterCopyright darkColor={siteData.dark_color}>
          <p>Flow Trading System | 2021</p>
        </FooterCopyright>
      </FooterContainer>
    </Container>
  );
}

export default ClientPage;
