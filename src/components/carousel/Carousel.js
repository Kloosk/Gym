import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding: 20px 0;
`;
const P = styled.p`
  text-align: center;
  font-size: 2rem;
`;
const Container = styled.section`
  margin-bottom: 100px;
`;
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
  return(
      <Container>
          <H1>Współpracują z nami</H1>
          <Slider {...settings}>
              <div><P>Lorem</P></div>
              <div><P>Ipsum</P></div>
              <div><P>Dolor</P></div>
              <div><P>Merol</P></div>
          </Slider>
      </Container>
  )
};
export default Carousel