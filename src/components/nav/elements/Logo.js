import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)`
 color: #333;
 text-decoration: none;
`;
const Logoo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto 25px;
`;
const LogoSmall = styled.span`
  font-size: 1rem;
  color: #A2D64E;
`;
const Logo = () => {
    return(
        <StyledLink to="/"><Logoo>Gym<sub><LogoSmall>fitness</LogoSmall>Club</sub></Logoo></StyledLink>
    )
};
export default Logo