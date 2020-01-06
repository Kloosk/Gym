import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 10px 25px;
  &:focus{
    outline: none;
    border: #A2D64E;
    box-shadow: 0 0 10px 4px #A2D64E;
  }
`;
const SearchList = styled.div`
  display: ${props => props.openSearchList ? `block` : `none`};
`;
const SearchMenu = styled.div`
  background-color: #fff;
 z-index: 5;
 text-align: center;
 border: 1px solid #A2D64E;
 position: fixed;
 margin: 0 auto; 
 left: 0;
 right: 0;
 top: 14vh;
 width: 80vw;
 display: ${props => props.openSearchMenu ? "flex" : "none"};
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-size: 2rem;
 padding: 40px 0 20px 0;
 cursor: default;
 color: black;
 &::before{
 content: '';
 position: absolute;
 top: -25px;
 left: 30%;
 width: 50px;
 height: 50px;
 transform: rotate(45deg);
 border: 1px solid #A2D64E;
 border-bottom: none;
 border-right: none;
 background-color: white;

`;
const SearchMenuUl = styled.ul`
  margin-top: 10px;
  list-style: none;
  height: 200px;
  overflow: auto;
  width: 280px;
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
const Btn = styled.button`
  margin-top: 20px;
  width: 250px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px 14px;
  border: 1px solid #989898;
  border-radius: 4px;
  color: #989898;
  transition: box-shadow 0.2s ease-in;
  &:hover{
  box-shadow: 0 2px 2px 2px #A2D64E;
  }
`;
const StyledLink = styled(Link)`
 color: #333;
 text-decoration: none;
`;
const Icon = styled.i`
  color: #A2D64E;
  padding: 0 5px;
`;
const Search = (props) => {
    const handleSearchList = () => {
        setOpenSearchList(!openSearchList);
    };
    const [openSearchList,setOpenSearchList] = useState(false);
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
    const SearchRef = useRef();
  return(
      <SearchMenu openSearchMenu={props.openSearchMenu}>
          <div>
              <p>Wybierz miasto</p>
              <Btn title="Wybierz klub lub miasto" onClick={handleSearchList}>
                  <span>Wybierz klub lub miasto</span>
                  <Icon className="fas fa-chevron-down"></Icon>`
              </Btn>
          </div>
      <SearchList openSearchList={openSearchList}>
          <Input type="text" onKeyUp={handleKeyUp} />
          <SearchMenuUl ref={SearchRef}>
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
      </SearchList>
      </SearchMenu>
  )
};
export default Search