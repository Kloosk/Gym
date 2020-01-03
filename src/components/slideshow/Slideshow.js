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
height: 100vh;
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
  color: #A2D64E;;
  background-color: #fff;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%) skewX(-10deg);
  padding: 10px 15px;
  font-size: 3rem;
  &:hover{
  border: 1px solid #333;
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
                        <Btn>NASZE KLUBY</Btn>
                    </Element>
                </SlideEach>
                <SlideEach>
                    <Element style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        <Btn>NASZE KLUBY</Btn>
                    </Element>
                </SlideEach>
                <SlideEach >
                    <Element style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        <Btn><a href="">NASZE KLUBY</a></Btn>
                    </Element>
                </SlideEach>
            </Slide>
        </Section>
    )
};
export default Slideshow