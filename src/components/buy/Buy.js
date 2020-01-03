import React from "react";
import styled from "styled-components";
import Buynow from "../nav/elements/Buynow";
import Footer from "../footer/Footer";
import Bg from "../../img/buy/bg.jpg"
import Logo from "../nav/elements/Logo";
import Lang from "../nav/elements/Lang";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 70px auto 0 auto;
  padding-bottom: 150px;
  background-image: url(${Bg});
  background-position: center;
  background-size: cover;
  position: relative;
  &::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
  }
`;
const Title = styled.div`
  z-index: 2;
  margin: 200px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  justify-items: center;
  grid-gap: 10px;
`;
const Block = styled.section`
  border: 1px solid;
  border-color: ${props => props.promotion ?  "#0099FF" : "#A2D64E"}
  padding: 0 25px 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  background-color: #fff;
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 30px 0;
`;
const P = styled.p`
   color: #333;
   font-size: 1.3rem;
`;
const Price = styled.div`
   font-size: 3.2rem;
   margin: 30px 0;
   text-align: center;
`;
const Span = styled.span`
  display: block;
  font-size: 1.5rem;
`;
const Options = styled.div`
align-self: flex-start;
   display: flex;
`;
const Icon = styled.i`
   color: #A2D64E;
   padding-right: 5px;  
`;
const Small = styled.p`
  margin: 30px 0;
    color: grey;
    font-size: 0.9rem;
`;
const Sale = styled.div`
font-size:1.6rem;
background-color: #0099FF;
color: white;
text-align: center;
padding: 10px 20px;
clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
`;
const Nav = styled.nav`
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;
const NavFlex = styled.div`
  display: flex;
`;
const promotion = true;
const Buy = () => {
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
                <Title>
                    <H1>Twoja karta gotowa do odbioru w 3 minuty</H1>
                    <P>Zapłać online i odbierz w swoim klubie Calypso Fitness</P>
                    <P>Wypróbuj nas przez 14 dni – gwarancja odstąpienia od umowy nawet jeśli skorzystasz z usług.</P>
                </Title>
                <Container>
                    <Block promotion={promotion}>
                        <Sale>PROMOCJA</Sale>
                        <H1>FIT COMFORT</H1>
                        <P>14 dni bezpłatnych testów</P>
                        <Price>
                            1zł/
                            <Span>przez 14 dni</Span>
                        </Price>
                        <Options><Icon className="fas fa-check"></Icon><P>14 dni bezpłatnych testów</P></Options>
                        <Options><Icon className="fas fa-check"></Icon><P>możliwość bezpłatneog zamrożenia karnetu</P></Options>

                        <Small>Jednorazowa opłata wpisowa: 20zł</Small>
                        <Buynow/>
                    </Block>
                    <Block promotion={false}>
                    <H1>FIT COMFORT</H1>
                    <P>14 dni bezpłatnych testów</P>
                    <Price>
                        1zł/
                        <Span>przez 14 dni</Span>
                    </Price>
                    <Options><Icon className="fas fa-check"></Icon><P>14 dni bezpłatnych testów</P></Options>
                    <Options><Icon className="fas fa-check"></Icon><P>możliwość bezpłatneog zamrożenia karnetu</P></Options>

                    <Small>Jednorazowa opłata wpisowa: 20zł</Small>
                    <Buynow/>
                </Block>
                    <Block promotion={false}>
                        <H1>FIT COMFORT</H1>
                        <P>14 dni bezpłatnych testów</P>
                        <Price>
                            1zł/
                            <Span>przez 14 dni</Span>
                        </Price>
                        <Options><Icon className="fas fa-check"></Icon><P>14 dni bezpłatnych testów</P></Options>
                        <Options><Icon className="fas fa-check"></Icon><P>możliwość bezpłatneog zamrożenia karnetu</P></Options>

                        <Small>Jednorazowa opłata wpisowa: 20zł</Small>
                        <Buynow/>
                    </Block>
                    <Block promotion={false}>
                        <H1>FIT COMFORT</H1>
                        <P>14 dni bezpłatnych testów</P>
                        <Price>
                            1zł/
                            <Span>przez 14 dni</Span>
                        </Price>
                        <Options><Icon className="fas fa-check"></Icon><P>14 dni bezpłatnych testów</P></Options>
                        <Options><Icon className="fas fa-check"></Icon><P>możliwość bezpłatneog zamrożenia karnetu</P></Options>

                        <Small>Jednorazowa opłata wpisowa: 20zł</Small>
                        <Buynow/>
                    </Block>

                </Container>
            </Main>
            <Footer/>
        </div>
    )
};
export default Buy