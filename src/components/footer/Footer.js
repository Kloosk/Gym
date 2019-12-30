import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.footer`
  display: flex;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;
const Icon = styled.i`

`;
const Button = styled.button`
  border: 1px solid grey;
  background: transparent;
  color: grey;
`;
const Footer = () => {
    return(
        <Container>
            <h1>Dla odmiany</h1>
            <Button>
                <StyledLink>
                    <p>KUP TERAZ ONLINE</p>
                    <Icon className="fas fa-shopping-cart"></Icon>
                </StyledLink>
            </Button>
        </Container>
    )
};

export default Footer