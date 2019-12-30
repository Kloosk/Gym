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

`;
const Icon = styled.i`
  color: #A2D64E;
  padding: 0 5px;
`;
const Buynow = () => {
    return (
        <BuyNow>
            <p>kup teraz</p>
            <Icon className="fas fa-shopping-cart"></Icon>
        </BuyNow>
    )
};

export default Buynow