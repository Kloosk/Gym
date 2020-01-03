import React from "react";
import styled from "styled-components";
import Slideshow from "../slideshow/Slideshow";
import mot from '../../img/motivation/mot.jpg'

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;
const Commercial = styled.div`
  z-index: 3;
  position: relative;
  top: -200px;
  display: flex;
  justify-content: space-between;
`;
const Element = styled.div`
  margin: 0 10px;
  width: 500px;
  height: 400px;
  background-color: red;
`;
const Video = styled.div`
  width: 100%;
  height: 500px;
`;
const VideoElement = styled.div`
  background-image: url(${mot});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Icon = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 5rem;
  color: #A2D64E;
  cursor: pointer;
`;
const H1 = styled.h1`
  font-size: 2.7rem;
  text-align: center;
  padding-bottom: 20px;
  font-weight: normal;
`;
const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  padding: 10px 23px;
  font-size: 1.2rem;
  background-color: #A2D64E;
  color: #fff;
  transform: skewX(-10deg);
  border: none;
  position: relative;
  &:hover{
  top: 1px;
  }
`;
const Friendly = styled.section`
  margin: 100px 0;
  width: 100%;
`;
const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
`;
const FriendlyEl = styled.div`
overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
`;
const Side = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  background-color: #A2D64E;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transform: translateX(-101%);
  transition: transform 0.5s ease-in;
  ${FriendlyEl}:hover &{
    transform: translateX(0);
  }
`;
const Span = styled.span`
  text-align: center;
  font-size: 1.1rem;
`;
const IconEl = styled.i`
  border: 2px solid #A2D64E;
  border-radius: 50%;
  color: #A2D64E;
  font-size: 3rem;
  padding: 20px;
`;
const Main = () => {
    return(
     <div>
        <Slideshow/>
        <Container>
            <Commercial>
                <Element></Element>
                <Element></Element>
            </Commercial>
            <Video>
                <H1>Zobacz #motywacja</H1>
                <VideoElement>
                    <Icon className="fas fa-play-circle"></Icon>
                </VideoElement>
            </Video>
            <Friendly>
                <H1>Fitness najbardziej przyjazną siecią klubów według opinii klientów</H1>
                <Grid>
                    <Left>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi at beatae cum distinctio, ducimus enim est et, in iusto magnam maxime modi, molestiae natus numquam possimus quaerat quasi quia reprehenderit similique suscipit tempore temporibus ullam voluptas voluptatem. Consequatur, quos.</p>
                    <Button>czytaj więcej ></Button>
                    </Left>
                    <Right>
                        <FriendlyEl>
                            <IconEl className="far fa-heart"></IconEl>
                            <Span>Lorem ipsum dolor</Span>
                            <Side>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores in magni maxime quisquam reiciendis!</Side>
                        </FriendlyEl>
                        <FriendlyEl>
                            <IconEl className="far fa-heart"></IconEl>
                            <Span>Lorem ipsum dolor</Span>
                            <Side>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores in magni maxime quisquam reiciendis!</Side>
                        </FriendlyEl>
                        <FriendlyEl>
                            <IconEl className="far fa-heart"></IconEl>
                            <Span>Lorem ipsum dolor</Span>
                            <Side>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores in magni maxime quisquam reiciendis!</Side>
                        </FriendlyEl>
                        <FriendlyEl>
                        <IconEl className="far fa-heart"></IconEl>
                        <Span>Lorem ipsum dolor</Span>
                        <Side>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores in magni maxime quisquam reiciendis!</Side>
                         </FriendlyEl>
                        <FriendlyEl>
                            <IconEl className="far fa-heart"></IconEl>
                            <Span>Lorem ipsum dolor</Span>
                            <Side>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores in magni maxime quisquam reiciendis!</Side>
                        </FriendlyEl>
                        <FriendlyEl>
                            <IconEl className="far fa-heart"></IconEl>
                            <Span>Lorem ipsum dolor</Span>
                            <Side>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores in magni maxime quisquam reiciendis!</Side>
                        </FriendlyEl>
                    </Right>
                </Grid>
            </Friendly>
        </Container>

     </div>
    )
};
export default Main