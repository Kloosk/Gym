import React,{useState,useRef} from "react";
import styled,{keyframes} from "styled-components";
import {Link,useHistory} from 'react-router-dom';
import AlertImg from '../../img/call/rope.jpg'

const Border = keyframes`
  from {
    border-width: 2px;
    opacity: 1;
  }
  to {
    border-width: 15px;
    opacity: 0.8;
  }
`;
const NavBar = styled.nav`
  z-index: 4;
    position: fixed;
    left: 0;
    top:0;
    width: 100vw;
   margin: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &::after{
  content: '';
  z-index: 5;
  position: fixed;
  right: 0;
  top: 0;
  height: ${props => props.exit ? `0` : `100vh`};
  width: ${props => props.exit ? `0` : `100vw`};
  background-color: #333;
  opacity: 0.6;
  }
`;
const Ham = styled.button`
 padding: 10px;
 cursor: pointer;
 background-color: white;
 display: inline-block;   
 border: 0;
 margin: 0;
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
  height: ${props => props.exit ? `2px` : `0`};
  transition: height 0.5s ease-in-out;
   &:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 2px;
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
      height: 2px;
      background-color: #000;
      transform: ${props => props.exit || `translateY(10px) rotate(-45deg) `}  ;
      transition: transform 1s ease-in-out;
  }
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto 25px;
`;
const LogoSmall = styled.span`
  font-size: 1rem;
  color: #A2D64E;
`;
const Search = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
 cursor: pointer;
 background-color: transparent;
 border: 0;
 margin: 0;
 font-size: 1rem;
 position: relative;
  &:hover{
  color:#A2D64E;
  }
`;
const Profile = styled.button`
font-size: 1rem;
display: flex;
align-items: center;
padding: 10px;
 cursor: pointer;
 background-color: transparent;
 border: 0;
 margin: 0;
`;
const BuyNow = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0 25px;
  font-size: 1rem;
  background: #ff6804;
  color: #fff;
  display: flex;
  align-items: center;

`;
const Lang = styled.div`
    cursor: pointer;
    margin: 0 46px 0 20px ;
    font-size: 1rem;
  display: flex;
  align-items: center;
  color: black;
  position: relative;
  
`;
const Menu = styled.div`
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100vh;
  transform: ${props => props.exit ? `translateX(-400px)` : `translateX(0)`};
  transition: transform 0.5s ease-in-out;
  background-color: white;
`;
const Flex = styled.div`
  display: flex;
`;
const Icon = styled.i`
  color: #A2D64E;
  padding: 0 5px;
`;
const LangMenu = styled.div`
  z-index: 5;
  opacity: 0;
  position: absolute;
  top: 100%;
  background-color: pink;
  color: black;
  ${Lang}:hover & {
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
const SearchMenu = styled.div`
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
 }
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
  width: 300px;
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
  box-shadow: 0 2px 10px 5px #A2D64E;
  }
`;
const CallNow = styled.div`
position: absolute;
left: 20px;
bottom: 50px;
cursor: pointer;

`;
const IconCall = styled.i`
  color: #fff;
  font-size: 3rem;
  border: 2px solid #A2D64E;
  border-radius: 50%;
  animation: ${Border} 3s linear infinite;
  background-color: #A2D64E;
  padding: 10px;
  &:hover{
    animation-play-state: paused;
   }
`;
const FlexMenu = styled.div`
  padding: 12px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
`;
const MenuExit = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;
const MenuList = styled.div`
padding: 50px 0;
  width: 100%;
`;
const ListUl = styled.ul`
  width: 100%;
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
`;
const ListLi = styled.li`
  text-align: center;
  margin-top: 3px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
   &:hover{
     font-weight: bold;
   }
`;
const A = styled.a`
  text-decoration: none;
  color: #333;
`;
const ListLiParent = styled.li`
text-align: center;
  overflow-y: hidden;
  height: ${props => props.openMenuList ? "110px" : "24px"};
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  position: relative;
  transition: height 0.2s ease-in;
`;
const ListUlIn = styled.ul`
position: absolute;
padding: 0;
top: 27px;
left: 50%;
transform: translateX(-50%);
list-style: none;
`;
const ListLiIn = styled.ul`
  padding: 0;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
   &:hover{
     font-weight: bold;
   }
`;
const ListSpan = styled.span`
 &:hover{
 font-weight: bold;
 }
`;
const ListIcon = styled.i`
  padding-left: 10px;
  color: #A2D64E;
  transition: transform 0.5s ease-in-out;
  ${ListSpan}:hover & {
    transform: translateY(5px);
  }
  
`;
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
const StyledLink = styled(Link)`
 color: #333;
 text-decoration: none;
`;
const CallAlert = styled.div` 
 display: ${props => props.popCall ? 'flex' : 'none'};
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
 width: 75vw;
 height: 55vh;
 background-color: #A2D64E;
`;
const CallTxt = styled.div`
    padding-top: 20px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 2rem;
`;
const CallImg = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${AlertImg});
    background-size: cover;
    background-position: center;
    transition: opacity 0.2s ease-in;
`;
const CallExit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  border-radius: 50%;
  padding: 2px 2px;
  font-size: 3rem;
  cursor: pointer;
  &:hover{
  transform: scale(1.3);
  }
`;
const CallInput = styled.input`
  width: 60%;
  outline: none;
  margin: 20px 0;
  padding: 20px 0;
  max-width: 80%;
  text-align: center;
  font-size: 1.5rem;
  color: black;
`;
const CallBtn = styled.button`
width: 45%;
padding: 15px 30px;
font-size: 1.2rem;
font-weight: bold;
background-color: #EE712F;
color: #fff;
border: none;
border-radius: 10px;
outline: none;
cursor: pointer;
`;
const CallForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
const CallWarning = styled.p`
    width: 60%;
    margin-top: 30px;
    text-align: center;
    font-size: 1rem;
    color: #333;
`;
const Nav = () => {
    const [exit,setExit] = useState(true);
    const handleMenu = () => {
      setExit(!exit);
    };
    const [openSearchMenu,setOpenSearchMenu] = useState(false);
    const handleSearchMenu = () => {
        setOpenSearchMenu(!openSearchMenu);
    };
    const [openMenuList,setOpenMenuList]=useState(false);
    const handleMenuList = () => {
      setOpenMenuList(!openMenuList);
    };
    const handleMenuExit = () => {
      if(!exit){
          setExit(true);
      }
    };
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
    const handleNum = e => {
        e.preventDefault();
        let num = e.target.firstChild.value;
        const re = /^[0-9]{9}$/g;
        if(re.test(num)){
            history.push('/');
            setPopCall(false);
        }
        else{
            e.target.firstChild.style.backgroundColor = '#FFAAAA';
            e.target.firstChild.style.borderColor = 'red';
        }
    };
    const [popCall,setPopCall] = useState(false);
    const SearchRef = useRef();
    const history = useHistory();

    return(
      <div>
          <NavBar exit={exit} onClick={handleMenuExit}>
              <Flex>
                  <Ham role="navigation"  onClick={handleMenu} exit={exit}>
                     <HamBox>
                         <HamInner exit={exit}></HamInner>
                     </HamBox>
                  </Ham>
                  <StyledLink to="/"><Logo>Gym<sub><LogoSmall>fitness</LogoSmall>Club</sub></Logo></StyledLink>
                  <Search onClick={handleSearchMenu}>
                      <Icon className="fas fa-search"></Icon>
                      <p>Wybierz miasto/sprawdź grafik</p>
                  </Search>
              </Flex>
              <Flex>
                    <StyledLink to={'/login'}>
                        <Profile>
                            <Icon className="far fa-user"></Icon>
                            <p>Profil</p>
                        </Profile>
                    </StyledLink>
                    <Lang>
                        <p>PL</p>
                        <Icon className="fas fa-chevron-down"></Icon>
                        <LangMenu>
                            <Ul>
                                <Li>POLSKI</Li>
                                <Li>ENGLISH</Li>
                            </Ul>
                        </LangMenu>
                    </Lang>
                    <BuyNow>
                        <p>kup teraz</p>
                        <Icon className="fas fa-shopping-cart"></Icon>
                    </BuyNow>
              </Flex>
          </NavBar >
          <Menu exit={exit}>
              <MenuExit>
                  <Ham role="navigation"  onClick={handleMenu} exit={exit}>
                      <HamBox>
                          <HamInner exit={exit}></HamInner>
                      </HamBox>
                  </Ham>
                  <div>
                      <StyledLink to="/"><Logo>Gym<sub><LogoSmall>fitness</LogoSmall>Club</sub></Logo></StyledLink>
                  </div>
              </MenuExit>
              <MenuList>
                  <ListUl>
                      <ListLiParent openMenuList={openMenuList}>
                            <ListSpan onClick={handleMenuList}>
                                Cennik
                                <ListIcon className="fas fa-chevron-down"></ListIcon>
                            </ListSpan>
                            <ListUlIn >
                                <ListLiIn><A href="#">Karnety</A></ListLiIn>
                                <ListLiIn><A href="#">Trening</A></ListLiIn>
                                <ListLiIn><A href="#">Korty</A></ListLiIn>
                            </ListUlIn>
                      </ListLiParent>
                      <ListLi><A href="#">Zajęcia grupowe</A></ListLi>
                      <ListLi><A href="#">Nasze korty</A></ListLi>
                      <ListLi><A href="#">Oferta</A></ListLi>
                      <ListLi><A href="#">Blog</A></ListLi>
                      <ListLi><A href="#">Kontakt</A></ListLi>
                  </ListUl>
              </MenuList>
              <FlexMenu>
                  <StyledLink to={'/login'}>
                      <Profile>
                          <Icon className="far fa-user"></Icon>
                          <p>Profil</p>
                      </Profile>
                  </StyledLink>
                  <Lang>
                      <p>PL</p>
                      <Icon className="fas fa-chevron-down"></Icon>
                      <LangMenu>
                          <Ul>
                              <Li>POLSKI</Li>
                              <Li>ENGLISH</Li>
                          </Ul>
                      </LangMenu>
                  </Lang>
              </FlexMenu>
              <CallNow onClick={() => {setPopCall(true);setExit(!exit);}}>
                  <IconCall className="fas fa-phone-square-alt"></IconCall>
              </CallNow>
          </Menu>
          <SearchMenu openSearchMenu={openSearchMenu}>
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
                      <SearchMenuLi><StyledLink to="/club/bydgoszcz">Bydgoszcz</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/bytom">Bytom</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/czestochowa">Częstochowa</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/elk">Ełk</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/gdansk">Gdańsk</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/gdynia">Gdynia</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/katowice">Katowice</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/opole">Opole</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/pila">Piła</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/poznan">Poznań</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/suwalki">Suwałki</StyledLink></SearchMenuLi>
                      <SearchMenuLi><StyledLink to="/club/warszawa">Warszawa</StyledLink></SearchMenuLi>
                  </SearchMenuUl>
              </SearchList>
          </SearchMenu>
          <CallAlert popCall={popCall}>
              <CallTxt>
                  <p>Oddzwonimy do Ciebie.</p>
                  <p>Podaj numer:</p>
                  <CallForm onSubmit={handleNum}>
                      <CallInput type="tel"/>
                      <CallBtn>Umów rozmowę</CallBtn>
                      <CallWarning>Twój numer telefonu nie będzie wykorzystywany w celach marketingowych lub przekazywany dalej. Tylko oddzwonimy.</CallWarning>
                  </CallForm>
              </CallTxt>
              <CallImg></CallImg>
              <CallExit onClick={() => {setPopCall(false)}}>
                  &times;
              </CallExit>
          </CallAlert>
      </div>
  )
};

export default Nav
