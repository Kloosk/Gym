import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import SimpleMap from "./GoogleMaps";

const Container = styled.section`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #000;
  padding: 10px 0;
`;
const P = styled.p`
  font-size: 1.2rem;
  color: #000;
  text-align: center;
  padding: 20px 0;
`;
const StyledLink = styled(Link)`
 color: #333;
 text-decoration: none;
`;
const SearchMenuUl = styled.ul`
  margin-top: 10px;
  list-style: none;
  height: 200px;
  overflow: auto;
  width: 280px;
  display: ${props => props.show ? "block" : "none"};
`;
const SearchMenuLi = styled.li`
  padding: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 1.4rem;
  &:hover{
  border-bottom: 1px solid #A2D64E;
  color: #A2D64E;
  }
`;
const Input = styled.input`
  width: 280px;
  margin-top: 10px;
  padding: 10px 25px;
  font-size: 1.1rem;
  &:focus{
    outline: none;
    border: #A2D64E;
    box-shadow: 0 0 10px 4px #A2D64E;
  }
`;
const Maps = () => {
    const handleKeyUp = e => {
        let value = e.target.value.toUpperCase();
        let LiElement = SearchRef.current.childNodes;
        LiElement.forEach(li => {
            let innerTxt = li.innerText.toUpperCase();
            if(innerTxt.includes(value)){
                li.style.display = "";
            }else{
                li.style.display = "none";
            }
        })
    };
    const [show,setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };
    const SearchRef = useRef();

    return(
        <Container id="clubs">
            <H1> Fitness - największa polska sieć klubów fitness</H1>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos inventore rem. Accusamus, amet blanditiis culpa, cum deleniti deserunt dolores dolorum eaque eius eum ex expedita facere facilis fugit impedit incidunt ipsa iusto laboriosam laudantium libero maiores minima mollitia nemo nesciunt officia omnis perferendis perspiciatis quod ratione recusandae repellendus sequi sint sunt unde vel, vero voluptatum. Cupiditate impedit magnam provident.</P>
            <Input type="text" onKeyUp={handleKeyUp} onClick={handleClick} placeholder="Wybierz miasto"/>
            <SearchMenuUl ref={SearchRef} show={show}>
                <StyledLink to="/club/bydgoszcz"><SearchMenuLi>Bydgoszcz</SearchMenuLi></StyledLink>
                <StyledLink to="/club/bytom"><SearchMenuLi>Bytom</SearchMenuLi></StyledLink>
                <StyledLink to="/club/czestochowa"><SearchMenuLi>Częstochowa</SearchMenuLi></StyledLink>
                <StyledLink to="/club/elk"><SearchMenuLi>Ełk</SearchMenuLi></StyledLink>
                <StyledLink to="/club/gdansk"><SearchMenuLi>Gdańsk</SearchMenuLi></StyledLink>
                <StyledLink to="/club/gdynia"><SearchMenuLi>Gdynia</SearchMenuLi></StyledLink>
                <StyledLink to="/club/katowice"><SearchMenuLi>Katowice</SearchMenuLi></StyledLink>
                <StyledLink to="/club/opole"><SearchMenuLi>Opole</SearchMenuLi></StyledLink>
                <StyledLink to="/club/pila"><SearchMenuLi>Piła</SearchMenuLi></StyledLink>
                <StyledLink to="/club/poznan"><SearchMenuLi>Poznań</SearchMenuLi></StyledLink>
                <StyledLink to="/club/suwalki"><SearchMenuLi>Suwałki</SearchMenuLi></StyledLink>
                <StyledLink to="/club/warszawa"><SearchMenuLi>Warszawa</SearchMenuLi></StyledLink>
            </SearchMenuUl>
            <SimpleMap/>
        </Container>

    )
};

export default Maps