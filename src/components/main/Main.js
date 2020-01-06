import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Slideshow from "../slideshow/Slideshow";
import mot from '../../img/motivation/mot.jpg'
import training from '../../img/personal/training.jpg'
import Maps from "../maps/Maps";
import Newsletter from "../newsletter/Newsletter";
import Carousel from "../carousel/Carousel";

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;
const Video = styled.div`
  width: 100%;
  height: 500px;
`;
const VideoTitle = styled.h1`
  font-size: 2.7rem;
  text-align: center;
  padding: 20px 0;
  font-weight: normal;
  z-index: 4;
  color: #000;
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
  padding: 20px 0;
  font-weight: normal;
  z-index: 4;
  color: #fff;
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
  transition: transform 0.2s ease-in;
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
const Train = styled.section`
  z-index: 1;
  width: 100%;
  background-image: url(${training});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  padding-bottom: 200px;
  padding-top: 50px;
  &::after {
  z-index: 1;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.2;
  }
`;
const TrainContent = styled.div`
  z-index: 2;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  margin-bottom: 100px;
  padding: 100px 50px 0px 50px;
`;
const TrainElement = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const IconTrain = styled.i`
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 3rem;
  padding: 20px;
`;
const TrainDesc = styled.p`
  padding: 5px 0;
  font-size: 1.2rem;
`;
const TrainButton = styled.button`
  z-index: 2;
  cursor: pointer;
  padding: 10px 23px;
  font-size: 1.2rem;
  background-color: #FF6804;
  color: #fff;
  transform: skewX(-10deg);
  border: none;
  position: relative;
  &:hover{
  top: 1px;
  }
`;
const Counting = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  margin-bottom: 100px;
`;
const CountBlock = styled.div`
  &:nth-child(1){
  background-color: #348329;
  }
  &:nth-child(2){
  background-color: #42A72A;
  }
  &:nth-child(3){
  background-color: #70C82F;
  }
  &:nth-child(4){
  background-color: #A6CF45;
  }
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
`;
const Main = () => {
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
    },[]);
    const loadRef = useRef();
    const parentsRef = useRef();
    const handleScroll = () => {
        let loadRect = loadRef.current.getBoundingClientRect();
        if(loadRect.top < window.scrollY){
            handleClick();
            window.removeEventListener('scroll',handleScroll,false);
        }
    };
    const handleClick = () => {
        let num = 0;
        let inter = setInterval(function (){
            let element = parentsRef.current.childNodes;
            num++;
            element.forEach(block => {
                block.innerHTML = num + '<div>KLUBÓW</div>';
            });
            if(num === 523) {
                clearInterval(inter);

            }
        },5);
    };
    return(
     <div>
        <Slideshow/>
        <Container>
            <Video>
                <VideoTitle>Zobacz #motywacja</VideoTitle>
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
         <Train>
             <H1>Trening Personalny – spróbuj nowej formy treningu</H1>
             <TrainContent>
                 <TrainElement>
                     <IconTrain className="far fa-heart"></IconTrain>
                     <TrainDesc>Lorem ipsum dolor</TrainDesc>
                     <TrainDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam beatae in ipsam iure, laborum mollitia nam non nulla quibusdam voluptas? Blanditiis dolor nemo non optio reprehenderit suscipit, ullam?</TrainDesc>
                 </TrainElement>
                 <TrainElement>
                     <IconTrain className="far fa-heart"></IconTrain>
                     <TrainDesc>Lorem ipsum dolor</TrainDesc>
                     <TrainDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam beatae in ipsam iure, laborum mollitia nam non nulla quibusdam voluptas? Blanditiis dolor nemo non optio reprehenderit suscipit, ullam?</TrainDesc>
                 </TrainElement>
                 <TrainElement>
                     <IconTrain className="far fa-heart"></IconTrain>
                     <TrainDesc>Lorem ipsum dolor</TrainDesc>
                     <TrainDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam beatae in ipsam iure, laborum mollitia nam non nulla quibusdam voluptas? Blanditiis dolor nemo non optio reprehenderit suscipit, ullam?</TrainDesc>
                 </TrainElement>
             </TrainContent>
             <TrainButton>sprawdź ofertę ></TrainButton>
         </Train>
         <Container>
            <Maps/>
            <Counting ref={parentsRef}>
                <CountBlock ref={loadRef}>500</CountBlock>
                <CountBlock>500</CountBlock>
                <CountBlock>500</CountBlock>
                <CountBlock>500</CountBlock>
            </Counting>
            <Newsletter/>
            <Carousel/>
         </Container>
     </div>
    )
};
export default Main