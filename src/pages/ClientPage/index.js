import React, { useEffect, useState } from "react";
import CardProductClient from "../../components/CardProductClient";

import { CircularProgress } from "@material-ui/core"; 

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
  Header,
  HeaderContainer,
  HeaderMenu,
  ImageContainer,
  ImageLogo,
  MenuContainer,
  OtherProductsContainer,
  OtherProductsContent,
  OtherProductsHeader,
  PopularProductsContainer,
  PopularProductsContent,
  PopularProductsHeader,
  ProductsContainer,
} from "./styles";

import { Anchor } from "antd";

import { RiWhatsappLine } from "react-icons/ri";

import imageLogo from "../../assets/FTS.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper/core";
import { api } from "../../services/api";
import { useParams } from "react-router";

SwiperCore.use([Pagination]);

const { Link } = Anchor;

function ClientPage() {
  const [siteData, setSiteData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const loadSite = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/company/${id}/site`);

        setSiteData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        alert(error);
      }
    };
    loadSite();
  }, []);

  return (
    <Container primaryColor={siteData.primary_color}>
      {isLoading ? (<CircularProgress size={200}/>) : 
      (
        <>
      <Header secondaryColor={siteData.secondary_color}>
          <ImageContainer>
            <img src={siteData.logo_img} alt="logo" />
          </ImageContainer>
          <Anchor targetOffset="150">
            <MenuContainer>
              <Link href="#home" title="Home" />
              <Link href="#products" title="Produtos" />
              <Link href="#footer" title="Contato" />
            </MenuContainer>
          </Anchor>
        </Header>
      <BodyContainer>
        <CompanyContainer banner={siteData.banner_img} id="home">
          <CompanyContent primaryColor={siteData.primary_color}>
            <h1>{siteData.slogan}</h1>
          </CompanyContent>
        </CompanyContainer>
        <ProductsContainer id="products">
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
              <h1>Produtos por categoria</h1>
            </PopularProductsHeader>
        {siteData && siteData.Company?.ProductsByType?.map((products) => {
          return (
            <PopularProductsContent>
              <CardProductClient siteData={siteData} products={products}/>
            </PopularProductsContent>
          )})
        }
        </PopularProductsContainer>
      </BodyContainer>
      <FooterContainer id="footer" secondaryColor={siteData.secondary_color}>
        <FooterInfosContainer>
          <FooterInfoLeft>
            <FooterInfoLeftHeader>
              <h1>Contato</h1>
            </FooterInfoLeftHeader>
            <FooterInfoLeftContent>

            {siteData && siteData.Company?.Branches?.map((branch) => {
                console.log(siteData.Company.Branches)
                return (
                  <>
                  <div style={{display:'flex', justifyContent: 'flex-start', alignItems:'flex-start'}}>
                    <h4>{branch.branch_name}</h4>: {" "}
                    <span style={{marginLeft: '5px'}}>{branch.Phone.phone}</span>
                  </div>
                  </>
                );
              })}
            </FooterInfoLeftContent>
          </FooterInfoLeft>
          <FooterInfoCenter>
            <h1>{siteData?.Company?.fantasy_name}</h1>
          </FooterInfoCenter>
          <FooterInfoRight>
              <h2>Encontre nossas lojas</h2>
              {siteData && siteData.Company?.Branches?.map((branch) => {
                console.log(siteData.Company.Branches)
                return (
                  <>
                  <div style={{display:'flex', justifyContent: 'flex-start', alignItems:'flex-start'}}>
                    <h4>{branch.branch_name}</h4>: {" "}
                    <span style={{marginLeft: '5px'}}>{branch.Address?.street}</span>
                  </div>
                  </>
                );
              })}
          </FooterInfoRight>
        </FooterInfosContainer>
        <FooterCopyright darkColor={siteData.dark_color}>
          <p>{siteData?.Company?.fantasy_name} | 2021</p>
        </FooterCopyright>
      </FooterContainer>
      </>
      )}
    </Container>
  );
}

export default ClientPage;
