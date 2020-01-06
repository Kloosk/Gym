import React from "react";
import styled from "styled-components";
import {useParams} from "react-router";
import Footer from "../footer/Footer";
import Logo from "../nav/elements/Logo";
import Lang from "../nav/elements/Lang";
import Buynow from "../nav/elements/Buynow";

const Nav = styled.nav`
  width: 70%;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
   @media only screen 
  and (min-width: 200px) and (max-width: 900px){ 
  width: 100%;
  margin: 20px 0;
  }
`;
const NavFlex = styled.div`
  display: flex;
`;
const Main = styled.main`
  margin: 150px auto 150px auto;
  width: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   @media only screen 
  and (min-width: 200px) and (max-width: 900px) { 
  width: 100vw;
  margin: 60px 0;
  }
`;
const Title = styled.h1`
font-size: 2rem;
text-transform: capitalize;
`;
const P = styled.p`
margin-top: 20px;
color: #333;
font-size: 1.5rem;
`;
const Data = styled.p`
padding: 3px 0;
font-size: 1.3rem;
color: #333;
`;
const Adress = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;
const Club = () => {
    const {id} = useParams();
    return(
        <div>
            <Nav>
                <Logo/>
                <NavFlex>
                    <Lang/>
                    <Buynow/>
                </NavFlex>
            </Nav>
            <Main>
                <Title>Fitness Club {id}</Title>
                <div>
                    <P>Godziny otwarcia:</P>
                    <Data>pn.-pt. 06:00-23:00</Data>
                    <Data>sob. 08:00-21:00</Data>
                    <Data>niedz. 08:00-21:00</Data>
                </div>
                <Adress>
                    <Data>ul.Niepodległości 000</Data>
                    <Data>tel. 123-456-789</Data>
                </Adress>
            </Main>
            <Footer/>
        </div>

    )
};
export default Club