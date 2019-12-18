import React,{useState} from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top:0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 10px 0;
`;
const Ham = styled.button`
 padding: 10px;
 cursor: pointer;
 background-color: transparent;
 display: inline-block;
 border: 0;
 margin: 0;
 transform: ${props => props.exit ? `translateX(0)` : `translateX(400px)`};
 transition: transform 0.5s ease-in-out;
`;
const HamBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;
const HamInner = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  background-color: #000;
  height: ${props => props.exit ? `3px` : `0`};
  transition: height 0.5s ease-in-out;
   &:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #000;
    transform: ${props => props.exit || `translateY(-10px) rotate(45deg) `}  ;
    transition: transform 1s ease-in-out;
   
  }
   &:before{
      content: "";
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #000;
      transform: ${props => props.exit || `translateY(10px) rotate(-45deg) `}  ;
      transition: transform 1s ease-in-out;
  }
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;
const Search = styled.button`
padding: 10px;
 cursor: pointer;
 background-color: transparent;
 border: 0;
 margin: 0;
`;
const Profile = styled.button`
padding: 10px;
 cursor: pointer;
 background-color: transparent;
 border: 0;
 margin: 0;
`;
const BuyNow = styled.button`
  background-color: darkorange;
`;
const Lang = styled.div`
  color: black;
`;
const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100vh;
  transform: ${props => props.exit ? `translateX(-450px)` : `translateX(0)`};
  transition: transform 0.5s ease-in-out;
`;
const Nav = () => {
    const [exit,setExit] = useState(true);
    const handleMenu = () => {
      setExit(!exit);
    };
  return(
      <div>
          <NavBar>
              <div>
                  <Ham role="navigation"  onClick={handleMenu} exit={exit}>
                     <HamBox>
                         <HamInner exit={exit}></HamInner>
                     </HamBox>
                  </Ham>
                  <Logo>GymFit</Logo>
                  <Search>

                  </Search>
              </div>
              <div>
                    <Profile>

                    </Profile>
                    <Lang>
                        <p>PL</p>
                    </Lang>
                    <BuyNow>

                    </BuyNow>
              </div>
          </NavBar >
          <Menu exit={exit}>
              <ul>
                  <li>Option</li>
              </ul>
          </Menu>
      </div>
  )
};

export default Nav
