import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import bg from "../../img/footer/bg.jpg"

const Container = styled.footer`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  &::after{
  content: '';
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  }
`;

const Button = styled.button`
  z-index: 1;
  cursor: pointer;
  border: 2px solid #fff;
  background: transparent;
  color: #000;
  transform: skewX(-8deg);
  padding: 20px 40px;
  &:hover{
    background-color: white;
  }
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  ${Button}:hover &{
   color: #000; 
  }
`;

const Icon = styled.i`
  padding-left: 10px;
  color: #fff;
  ${Button}:hover &{
   color: #000; 
  }
`;
const H1 = styled.h1`
  z-index: 1;
  font-size: 2rem;
  margin: 20px 0;
`;
const List = styled.nav`
  margin: 40px 0;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 5px;
  @media only screen 
  and (min-width: 375px) 
  and (max-width: 812px){ 
  grid-template-columns: repeat(2,1fr);
  }
  
`;
const Social = styled.div`
  z-index: 1;
  display: flex;
  margin-bottom: 40px;
`;
const SocialIcon = styled.i`
  font-size: 1.2rem;
  padding: 20px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: #A2D64E;
  color:#fff;
  cursor: pointer;
`;
const SocialIconFb = styled(SocialIcon)`
  padding: 20px 23px;
`;
const Copyright = styled.p`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 1rem;
`;
const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 3px 0;
`;
const Contact = styled.div`
  z-index: 1;  
  font-size: 1.2rem;
  margin-bottom: 40px;
`;
const A = styled.a`
  color: #fff;
  text-decoration: none;
`;
const Footer = () => {
    return(
        <Container>
            <H1>Dla odmiany</H1>
            <Button>
                <StyledLink to={'/buy'}>
                    <p>KUP TERAZ ONLINE</p>
                    <Icon className="fas fa-shopping-cart"></Icon>
                </StyledLink>
            </Button>
            <List>
                <Ul>
                    <Li>wyszukaj zajęcia</Li>
                    <Li>o nas</Li>
                    <Li>oferta</Li>
                    <Li>nasze korty</Li>
                    <Li>dla firm</Li>
                </Ul>
                <Ul>
                    <Li>kariera</Li>
                </Ul>
                <Ul>
                    <Li>logowanie</Li>
                    <Li>rejestracja</Li>
                </Ul>
                <Ul>
                    <Li>pomoc</Li>
                    <Li>polityka prywatności</Li>
                    <Li>regulamin</Li>
                    <Li>dokumenty do pobrania</Li>
                </Ul>
            </List>
            <Contact>Fitness Club Telefon 999-999-999</Contact>
            <Social>
                <SocialIconFb className="fab fa-facebook-f"></SocialIconFb>
                <SocialIcon className="fab fa-instagram"></SocialIcon>
            </Social>
            <Copyright>
                Copyright 2020 &copy; KOPIA STRONY <A href="https://www.calypso.com.pl">https://www.calypso.com.pl/</A>
            </Copyright>
        </Container>
    )
};

export default Footer