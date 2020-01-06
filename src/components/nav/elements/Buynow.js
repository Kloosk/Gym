import React from "react";
import styled from "styled-components";

const BuyNow = styled.button`
  cursor: pointer;
  border: 0;
  padding: 10px 20px;
  font-size: 1rem;
  background: #ff6804;
  color: #fff;
  display: flex;
  align-items: center;
  @media only screen 
  and (min-width: 375px) 
  and (max-width: 812px) { 
  padding: 5px;
  margin-right: 40px;
  }
`;
const Icon = styled.i`
  color: #A2D64E;
  padding: 0 5px;
`;
const None = styled.p`
@media only screen 
  and (min-width: 375px) 
  and (max-width: 812px) { 
  display: none;
  }
`;
const Buynow = () => {
    return (
        <BuyNow>
            <None>kup teraz</None>
            <Icon className="fas fa-shopping-cart"></Icon>
        </BuyNow>
    )
};

export default Buynow