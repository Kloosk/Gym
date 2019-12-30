import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  color: #A2D64E;
  padding: 0 5px;
`;
const Langg = styled.div`
    cursor: pointer;
    margin: 0 46px 0 20px ;
    font-size: 1rem;
  display: flex;
  align-items: center;
  color: black;
  position: relative;
  
`;
const LangMenu = styled.div`
  z-index: 5;
  opacity: 0;
  position: absolute;
  top: 100%;
  background-color: pink;
  color: black;
  ${Langg}:hover & {
    opacity: 1;
  }
`;
const Ul = styled.ul`
  background-color: white;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  text-align: center;
  cursor: pointer;
  padding: 10px 5px;
  background-color: white;
  &:hover{
    background-color:#A2D64E;
  }
`;

const Lang = () => {
    return (
        <Langg>
            <p>PL</p>
            <Icon className="fas fa-chevron-down"></Icon>
            <LangMenu>
                <Ul>
                    <Li>POLSKI</Li>
                    <Li>ENGLISH</Li>
                </Ul>
            </LangMenu>
        </Langg>
    )
};

export default Lang