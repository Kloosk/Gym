import React from 'react';
import { Slide } from 'react-slideshow-image';
import slider1 from '../../img/slider/slider1.jpg'
import slider2 from '../../img/slider/slider2.jpg'
import slider3 from '../../img/slider/slider3.jpg'
import styled from "styled-components";


const Section = styled.section`
z-index: 2;
margin: 80px 0 0 0;
width: 100vw;
`;
const SlideEach = styled.div`
`;
const Element = styled.div`
width: 100%;
height: 80vh;
background-size: cover;
background-position: top;
background-repeat: no-repeat;
position:relative;
&::after{
content: '';
position: absolute;
height: 100vh;
width: 100%;
top: 0;
left: 0;
background-color: #000;
opacity: 0.4;
}
`;
const Btn = styled.button`
  z-index: 2;
  cursor: pointer;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%) skewX(-8deg);
  font-size: 3rem;
  border: 2px solid #fff;
  background: transparent;
  color: #000;
  padding: 20px 40px;
  &:hover{
  border: 1px solid #A2D64E;
  }
`;
const A = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  ${Btn}:hover &{
   color: #A2D64E;
  }
`;
const Slideshow = () =>
    {const slideImages = [slider1,slider2,slider3];

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
        arrows: false,
    };
    return (
        <Section>
            <Slide {...properties}>
                <SlideEach>
                    <Element style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        <Btn><A href="#clubs">NASZE KLUBY</A></Btn>
                    </Element>
                </SlideEach>
                <SlideEach>
                    <Element style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        <Btn><A href="#clubs">NASZE KLUBY</A></Btn>
                    </Element>
                </SlideEach>
                <SlideEach >
                    <Element style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        <Btn><A href="#clubs">NASZE KLUBY</A></Btn>
                    </Element>
                </SlideEach>
            </Slide>
        </Section>
    )
};
export default Slideshow