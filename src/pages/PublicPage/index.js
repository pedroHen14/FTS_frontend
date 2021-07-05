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
  CardFormContainer,
  PlansCardNada,
  ContainerInput,
  Input,
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
import { Grow, Slide, Button, IconButton, Collapse } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import imageTeste from "../../assets/bg.jpg";
import { ExpandMore } from "@material-ui/icons";
import { Anchor } from "antd";
import { useHistory } from "react-router";
import { api, apiCep } from "../../services/api";
import { notify } from "../../utils";
import formatCnpj from "@brazilian-utils/format-cnpj";
import { ToastContainer } from "react-toastify";

const { Link } = Anchor;

function PublicPage() {
  const history = useHistory();
  const [inReloadPage, setInReloadPage] = useState(false);
  const [inScrollFadeFeatures, setInScrollFadeFeatures] = useState(false);
  const [inScrollFadeDescription, setInScrollFadeDescription] = useState(false);
  const [inScrollFadeHeader, setInScrollFadeHeader] = useState(false);
  const [plans, setPlans] = useState([]);
  const [reload, setReload] = useState(0);

  const [register, setRegister] = useState({
    cnpj: "",
    fantasy_name: "",
    social_reason: "",
    place_number: "",
    companie_password: "",
    cep: "",
    district: "",
    city: "",
    street: "",
    state: "",
    nature_of_the_business: "",
    commercial_email: "",
    phone: "",
  });

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

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });

    if (e.target.id === "cep") {
      const { cep } = { cep: e.target.value };

      if (cep.length >= 9) {
        handleCep(cep);
      }
    }
  };

  const handleCep = async (cep) => {
    cep.replace("-", "");

    try {
      const { data } = await apiCep.get(`${cep}/json`);

      setRegister({
        ...register,
        cep: data.cep,
        district: data.bairro,
        city: data.localidade,
        street: data.logradouro,
        state: data.uf,
      });
    } catch (error) {
      notify("CEP não é válido", "error");
    }
  };

  const handleReload = (e) => {
    setRegister({
      cnpj: "",
      fantasy_name: "",
      social_reason: "",
      place_number: "",
      companie_password: "",
      cep: "",
      district: "",
      city: "",
      street: "",
      state: "",
      nature_of_the_business: "",
      commercial_email: "",
    });

    setReload(Math.random());
  };

  return (
    <>
      <ToastContainer style={{ color: "white" }} />
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
            <FaUserAlt style={{ cursor: "pointer" }} />
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
                    A <strong>Flow Trading System</strong> busca se aprofundar
                    no mercado tecnológico gerencial para se tornar uma das
                    empresas mais conhecidas nacionalmente e internacionalmente.
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
                  <CardPlans
                    plans={p}
                    handleInput={handleInput}
                    stateRegister={register}
                    reload={handleReload}
                  />
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

function CardPlans({ plans, handleInput, stateRegister, reload }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("company", {
        cnpj: stateRegister.cnpj.replace(/\D/g, ""),
        fantasy_name: stateRegister.fantasy_name,
        social_reason: stateRegister.social_reason,
        companie_password: stateRegister.companie_password,
        place_number: parseInt(stateRegister.place_number),
        plan_id: plans.id,
        nature_of_the_business: stateRegister.nature_of_the_business,
        commercial_email: stateRegister.commercial_email,
        phone: stateRegister.phone,
        address: {
          cep: stateRegister.cep.replace("-", ""),
          street: stateRegister.street,
          complement: "nandandnandna",
          district: stateRegister.district,
          city: stateRegister.city,
          uf: stateRegister.state,
        },
      });

      reload();
      setExpanded(false);
      notify("Sua empresa foi cadastrada com sucesso!", "success");
    } catch (error) {
      notify("Falha ao cadastrar a empresa!", "error");
    }
  };

  return (
    <PlansCard>
      <PlansCardNada>
        <PlansCardHeader title={plans.plan_name} />
        <PlansCardContent>
          <PlansCardList>
            <PlansCardListItem>
              <PlansCardListItemIcon>
                <FaCheck color="green" />
              </PlansCardListItemIcon>
              <PlansCardListItemText
                primary={`Limite de ${plans.branch_limit} filiais`}
              />
            </PlansCardListItem>
            <PlansCardListItem>
              <PlansCardListItemIcon>
                <FaCheck color="green" />
              </PlansCardListItemIcon>
              <PlansCardListItemText
                primary={`${plans.user_limit_per_branch} usuários por filiais`}
              />
            </PlansCardListItem>
            <PlansCardListItem>
              <PlansCardListItemIcon>
                {plans.use_phone_for_sale ? (
                  <FaCheck color="green" />
                ) : (
                  <FaTimesCircle color="red" />
                )}
              </PlansCardListItemIcon>
              <PlansCardListItemText primary="Função de venda pelo App" />
            </PlansCardListItem>
            <PlansCardListItem>
              <PlansCardListItemIcon>
                {plans.access_website ? (
                  <FaCheck color="green" />
                ) : (
                  <FaTimesCircle color="red" />
                )}
              </PlansCardListItemIcon>
              <PlansCardListItemText primary="Acesso a WebSite" />
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
            onClick={handleSubmit}
          >
            Comprar
          </Button>
          <h3>
            {parseInt(plans.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>

          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            className={!expanded ? "expandedClose" : "expandedOpen"}
            aria-label="show more"
            style={{ transition: "all .4s" }}
          >
            <ExpandMore />
          </IconButton>
        </PlansCardFooter>
      </PlansCardNada>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <PlansCardContent className="aberto">
          <CardFormContainer>
            <ContainerInput>
              <Input
                id="cnpj"
                variant="outlined"
                label="CNPJ"
                type="text"
                value={formatCnpj(stateRegister.cnpj)}
                onChange={handleInput}
                required
                inputProps={{ maxLength: "18" }}
              />

              <Input
                id="place_number"
                variant="outlined"
                label="Número"
                type="number"
                value={stateRegister.place_number}
                onChange={handleInput}
                required
              />

              <Input
                id="cep"
                variant="outlined"
                label="CEP"
                type="text"
                value={stateRegister.cep
                  .replace(/(\d{5})(\d)/, "$1-$2")
                  .replace(/(\d{3})$/, "$1")}
                onChange={handleInput}
                inputProps={{ maxLength: "9" }}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                id="fantasy_name"
                variant="outlined"
                label="Nome Fantasia"
                type="text"
                value={stateRegister.fantasy_name}
                onChange={handleInput}
                required
              />

              <Input
                id="companie_password"
                variant="outlined"
                label="Senha"
                type="password"
                value={stateRegister.companie_password}
                onChange={handleInput}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                id="social_reason"
                variant="outlined"
                label="Razão Social"
                type="text"
                value={stateRegister.social_reason}
                onChange={handleInput}
                required
              />
              <Input
                id="nature_of_the_business"
                variant="outlined"
                label="Natureza da empresa"
                type="text"
                value={stateRegister.nature_of_the_business}
                onChange={handleInput}
                required
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                id="street"
                variant="outlined"
                label="Rua"
                type="text"
                value={stateRegister.street}
                onChange={handleInput}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                id="district"
                variant="outlined"
                label="Bairro"
                type="text"
                value={stateRegister.district}
                onChange={handleInput}
                required
              />

              <Input
                id="city"
                variant="outlined"
                label="Cidade"
                type="text"
                value={stateRegister.city}
                onChange={handleInput}
                required
              />
              <Input
                id="state"
                variant="outlined"
                label="Estado"
                type="text"
                value={stateRegister.state}
                onChange={handleInput}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                id="phone"
                variant="outlined"
                label="Telefone"
                type="tel"
                value={stateRegister.phone}
                onChange={handleInput}
                required
              />

              <Input
                id="commercial_email"
                variant="outlined"
                label="E-mail comercial"
                type="email"
                value={stateRegister.commercial_email}
                onChange={handleInput}
                required
              />
            </ContainerInput>
          </CardFormContainer>
        </PlansCardContent>
      </Collapse>
    </PlansCard>
  );
}

export default PublicPage;
