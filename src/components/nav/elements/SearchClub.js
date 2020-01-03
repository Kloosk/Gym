import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

const SearchMenuUl = styled.ul`
  margin-top: 10px;
  list-style: none;
  height: 200px;
  display: ${props => props.show ? "block":"none"};
  overflow: auto;
  width: 100%;
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
  width: 100%;
  margin-top: 10px;
  padding: 10px 25px;
  font-size: 1.1rem;
  border-color: ${props => props.error ? "red" : " #333"};
  &:focus{
    outline: none;
    border: #A2D64E;
    box-shadow: 0 0 2px 4px #A2D64E;
  }
`;
const SearchClub = () => {
    const [show,setShow] = useState(false);
    const SearchRef = useRef();
    const InputRef = useRef();
    useEffect(() => handleCity(SearchRef.current.childNodes),[]);
    const handleCity = (city) => {

      city.forEach(li => {
          li.addEventListener('click',function(){clickLi(li.innerText)});
      })
    };
    const clickLi = (li) => {
        InputRef.current.value = li;
        handleClick();
        handleChange();
    };
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
    const handleClick = () => {
        setShow(!show);
    };
    const [error,setError] = useState(false);
    const cities = ['Bydgoszcz','Bytom','Częstochowa','Ełk','Gdańsk','Gdynia','Katowice','Opole','Piła','Poznań','Suwałki','Warszawa'];
    const handleChange = e => {
        let isGood = false;
        cities.forEach(city => {
           if(city === InputRef.current.value){
               isGood = true;
           }
        });
        if(!isGood){
            setError(true);
        }
        else{
            setError(false);
        }
        console.log(isGood);
    };

    return(
        <div>
            <Input type="text" onKeyUp={handleKeyUp} onClick={handleClick} ref={InputRef} onChange={handleChange} error={error}/>
            <SearchMenuUl ref={SearchRef} show={show}>
                <SearchMenuLi>Bydgoszcz</SearchMenuLi>
                <SearchMenuLi>Bytom</SearchMenuLi>
                <SearchMenuLi>Częstochowa</SearchMenuLi>
                <SearchMenuLi>Ełk</SearchMenuLi>
                <SearchMenuLi>Gdańsk</SearchMenuLi>
                <SearchMenuLi>Gdynia</SearchMenuLi>
                <SearchMenuLi>Katowice</SearchMenuLi>
                <SearchMenuLi>Opole</SearchMenuLi>
                <SearchMenuLi>Piła</SearchMenuLi>
                <SearchMenuLi>Poznań</SearchMenuLi>
                <SearchMenuLi>Suwałki</SearchMenuLi>
                <SearchMenuLi>Warszawa</SearchMenuLi>
            </SearchMenuUl>
        </div>
    )
};
export default SearchClub