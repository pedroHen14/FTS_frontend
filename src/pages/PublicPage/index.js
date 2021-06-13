import React, { useRef } from "react";

import {
  Body,
  Container,
  DescriptionContent,
  TriangleBottom,
  TriangleTop,
  Header,
  IconUser,
  ImageContainer,
  MenuContainer,
  WelcomeContainer,
  FeaturesContainer,
  FeaturesHeader,
  FeaturesContent,
  InfosContainer,
  InfosHeader,
  InfosContent,
  InfosCardContainer,
  InfosCard,
  PlansCard,
  PlansCardHeader,
  PlansContainer,
  PlansCardMedia,
  PlansCardContent,
  PlansCardFooter,
  PlansCardListItemIcon,
  PlansCardList,
  PlansCardListItem,
  PlansCardListItemText,
  FooterInfoContainer,
  FooterContainer,
  FooterInfos,
  DescriptionContainer,
} from "./styles";

import imageLogo from "../../assets/FTS.png";
import {
  FaUserAlt,
  FaEye,
  FaHandHoldingUsd,
  FaCheck,
  FaTimesCircle,
} from "react-icons/fa";
import {
  BiBarcodeReader,
  BiDollarCircle,
  BiStar,
  BiTargetLock,
} from "react-icons/bi";
import Lottie from "react-lottie";
import animationData from "../../assets/business_2.json";
import {
  Grow,
  Slide,
  Avatar,
  Button,
  IconButton,
  CardActions,
  Typography,
  Collapse,
} from "@material-ui/core";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useEffect } from "react";
import imageTeste from "../../assets/bg.jpg";
import { ExpandMore } from "@material-ui/icons";
import { Anchor } from "antd";
import { useHistory } from "react-router";
import { api } from "../../services/api";
import { notify } from "../../utils";
import ModalRegisterCompany from "../../components/ModalRegisterCompany";

const { Link } = Anchor;

function PublicPage() {
  const history = useHistory();
  const [inReloadPage, setInReloadPage] = useState(false);
  const [inScrollFadeFeatures, setInScrollFadeFeatures] = useState(false);
  const [inScrollFadeDescription, setInScrollFadeDescription] = useState(false);
  const [inScrollFadeHeader, setInScrollFadeHeader] = useState(false);
  const [plans, setPlans] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [openModalRegisterCompany, setOpenModalRegisterCompany] =
    useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInReloadPage(true);
    }, 500);
  }, []);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const response = await api.get("/plan");

        setPlans(response.data);
      } catch (error) {
        notify("Erro ao encontrar os planos", "error");
      }
    };

    loadPlans();
  }, []);

  const handleModalRegisterCompany = async (idPlan) => {
    try {
      const { data } = await api.get(`/plan/find/${idPlan}`);

      setModalContent(data);
      setOpenModalRegisterCompany(true);
    } catch (error) {
      notify("Plano não encontrado", "error");
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleScrollFadeDescription = () => {
    if (document.documentElement.scrollTop > 500) {
      setInScrollFadeDescription(true);
    } else setInScrollFadeDescription(false);
  };

  const handleScrollFadeHeader = () => {
    if (document.documentElement.scrollTop > 100) {
      setInScrollFadeHeader(true);
    } else setInScrollFadeHeader(false);
  };

  const handleScrollFadeFeatures = () => {
    if (document.documentElement.scrollTop > 1500) {
      setInScrollFadeFeatures(true);
    } else setInScrollFadeFeatures(false);
  };

  window.onscroll = () => {
    handleScrollFadeDescription();
    handleScrollFadeFeatures();
    handleScrollFadeHeader();
  };

  const lottieBusinessOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleRedirectLogin = () => {
    history.push("/login");
  };

  return (
    <>
      {/* {openModalRegisterCompany && (
        <ModalRegisterCompany
          idPlan={modalContent.id}
          planName={modalContent.plan_name}
        />
      )} */}
      <Container>
        <Header
          style={
            inScrollFadeHeader
              ? {
                  backgroundColor: "var(--darkGray)",
                  color: "var(--white)",
                  boxShadow: "3px 3px 3px var(--lightTransparent)",
                  borderRadius: "0px 0px 10px 10px",
                }
              : { backgroundColor: "transparent" }
          }
        >
          <ImageContainer>
            <img src={imageLogo} alt="logo" />
          </ImageContainer>
          <Anchor targetOffset="150">
            <MenuContainer>
              <Link href="#home" title="Home" />
              <Link href="#description" title="Descrição" />
              <Link href="#features" title="Funcionalidades" />
              <Link href="#infos" title="Infos" />
              <Link href="#plans" title="Planos" />
              <Link href="#footer" title="Contato" />
            </MenuContainer>
          </Anchor>
          <IconUser onClick={() => handleRedirectLogin()}>
            <FaUserAlt />
          </IconUser>
        </Header>
        <Body>
          <WelcomeContainer id="home">
            <Lottie options={lottieBusinessOptions} width={700} height={700} />
            <Slide direction="left" in={inReloadPage} timeout={1000}>
              <div>
                <h2>Seja bem-vindo,</h2>
                <h1>Venha conosco revolucionar o seu negócio</h1>
              </div>
            </Slide>
          </WelcomeContainer>
          <DescriptionContainer>
            <TriangleTop />
            <DescriptionContent id="description">
              <Grow in={inScrollFadeDescription} timeout={1000}>
                <p>
                  A Flow Tranding System é uma empresa que foi criada visando
                  estabelecer praticidade no dia a dia de comerciantes que não
                  aderiram a um sistema de gestão informatizado e, por isso,
                  acabam por ter um desempenho inferior. De modo geral, além de
                  um sistema web de gerenciamento intuitivo e composto por
                  diversas ferramentas, os clientes podem contar com a versão
                  mobile e ainda um site próprio para a divulgação de seu
                  comércio, podendo ter um alcance de público muito maior.
                </p>
              </Grow>
            </DescriptionContent>
            <TriangleBottom />
          </DescriptionContainer>

          <FeaturesContainer id="features">
            <FeaturesHeader>
              <h1>
                Veja no que o <strong>FTS</strong> pode ajudar sua empresa
              </h1>
            </FeaturesHeader>
            <FeaturesContent>
              <div className="mvv-container-card">
                <Slide
                  direction="left"
                  in={inScrollFadeFeatures}
                  timeout={1000}
                >
                  <div className="mvv-card-content">
                    <div className="mvv-card">
                      <BiBarcodeReader size="100px" color="var(--dark)" />
                      <p>
                        Temos um sistema de vendas rápidas pelo celular do seu
                        vendedor, melhorando e priorizando o atendimento rápido
                        ao cliente sem filas para atrapalhar
                      </p>
                    </div>
                    <div className="mvv-card">
                      <BiStar size="100px" color="var(--dark)" />
                      <p>
                        Se você adquirir o nosso plano premium, terá acesso a um
                        site que iremos disponbilizar com todos os produtos da
                        sua loja disponíveis para o cliente visualizar
                      </p>
                    </div>
                    <div className="mvv-card">
                      <BiDollarCircle size="100px" color="var(--dark)" />
                      <p>
                        Vamos trazer a tecnologia para o seu negócio, será uma
                        grande evolução em questão de produtividade e também
                        financeira
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>
            </FeaturesContent>
          </FeaturesContainer>
          <InfosContainer id="infos">
            <InfosHeader>
              <h1>Missão</h1>
            </InfosHeader>
            <InfosContent>
              <BiTargetLock size="50%" color="var(--light)" />
              <InfosCardContainer>
                <InfosCard>
                  <p>
                    A razão para darmos início a esse sistema foi oferecer um
                    excelente{" "}
                    <strong>Sistema de Gerenciamento Comercial</strong> para o
                    mercado atual, ajudando micro, pequenas e médias empresas.
                  </p>
                </InfosCard>
              </InfosCardContainer>
            </InfosContent>
          </InfosContainer>
          <InfosContainer>
            <InfosHeader>
              <h1>Visão</h1>
            </InfosHeader>
            <InfosContent>
              <InfosCardContainer>
                <InfosCard>
                  <p>
                    A Flow Trading System busca se aprofundar no mercado
                    tecnológico gerencial para se tornar uma das empresas mais
                    conhecidas nacionalmente e internacionalmente.
                  </p>
                </InfosCard>
              </InfosCardContainer>
              <FaEye size="50%" color="var(--light)" />
            </InfosContent>
          </InfosContainer>
          <InfosContainer>
            <InfosHeader>
              <h1>Valores</h1>
            </InfosHeader>
            <InfosContent>
              <FaHandHoldingUsd size="50%" color="var(--light)" />
              <InfosCardContainer>
                <InfosCard>
                  <p>
                    Segurança e proteção de dados e senhas.{" "}
                    <p>
                      Dedicação em sempre oferecer o melhor serviço possível
                      para todos.
                    </p>{" "}
                    <p>
                      Facilidade, tornando tudo muito simples, fácil e direto.
                    </p>{" "}
                    Confiança em nossos negócios e acordos que temos com outras
                    empresas.
                  </p>
                </InfosCard>
              </InfosCardContainer>
            </InfosContent>
          </InfosContainer>
          <PlansContainer id="plans">
            {plans &&
              plans.map((p) => {
                return (
                  <PlansCard>
                    <PlansCardHeader title={p.plan_name} />
                    <PlansCardMedia title="image 1" image={imageTeste} />
                    <PlansCardContent>
                      <PlansCardList>
                        <PlansCardListItem>
                          <PlansCardListItemIcon>
                            <FaCheck color="green" />
                          </PlansCardListItemIcon>
                          <PlansCardListItemText
                            primary={`Limite de ${p.branch_limit} filiais`}
                          />
                        </PlansCardListItem>
                        <PlansCardListItem>
                          <PlansCardListItemIcon>
                            <FaCheck color="green" />
                          </PlansCardListItemIcon>
                          <PlansCardListItemText
                            primary={`${p.user_limit_per_branch} usuários por filiais`}
                          />
                        </PlansCardListItem>
                        <PlansCardListItem>
                          <PlansCardListItemIcon>
                            {p.use_phone_for_sale ? (
                              <FaCheck color="green" />
                            ) : (
                              <FaTimesCircle color="red" />
                            )}
                          </PlansCardListItemIcon>
                          <PlansCardListItemText primary="Função de venda pelo App" />
                        </PlansCardListItem>
                      </PlansCardList>
                    </PlansCardContent>
                    <PlansCardFooter disableSpacing>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "green",
                          color: "var(--white)",
                          fontWeight: "bold",
                        }}
                        onClick={() => handleModalRegisterCompany(p.id)}
                      >
                        Comprar
                      </Button>
                      <h3>R$ {p.value.replace(".", ",")}</h3>

                      <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMore />
                      </IconButton>
                    </PlansCardFooter>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <PlansCardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering,
                          add saffron and set aside for 10 minutes.
                        </Typography>
                      </PlansCardContent>
                    </Collapse>
                  </PlansCard>
                );
              })}
          </PlansContainer>
          <FooterContainer id="footer">
            <FooterInfoContainer>
              <FooterInfos>
                <h3>Contato</h3>
                <span>4002-8922</span>
                <span>4002-8922</span>
                <span>4002-8922</span>
              </FooterInfos>
              <FooterInfos>
                <h3>Contato</h3>
                <span>4002-8922</span>
                <span>4002-8922</span>
                <span>4002-8922</span>
              </FooterInfos>
              <FooterInfos>
                <h3>Contato</h3>
                <span>4002-8922</span>
                <span>4002-8922</span>
                <span>4002-8922</span>
              </FooterInfos>
            </FooterInfoContainer>
            <div className="info-footer">
              <p>Flow Trading System | 2021</p>
            </div>
          </FooterContainer>
        </Body>
      </Container>
    </>
  );
}

export default PublicPage;
