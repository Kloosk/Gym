import React from "react";
import { useForm } from 'react-hook-form'
import styled from "styled-components";
import {Link} from "react-router-dom";
import Facebook from "../facebook/Facebook";
import Logo from "../nav/elements/Logo";
import Buynow from "../nav/elements/Buynow";
import Lang from "../nav/elements/Lang";
import Footer from "../footer/Footer";
const Container = styled.main`
  margin: 0 auto 50px auto;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen 
      and (min-width: 375px) 
      and (max-width: 812px) { 
      width: 90vw;
      margin: 20px auto;
           }
  
`;
const Flex = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const H1 = styled.h1`
  cursor: pointer;
  color: black;
  font-size: 1.5rem;
`;
const Hint = styled.p`
  width: 100%;
  text-align: left;
  margin-top: 15px;
  color: grey;
  font-size: 0.8rem;
`;
const Label = styled.label`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  width: 100%;
`;
const Remember = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover{
  color: #A2D64E;
  }
`;
const Submit = styled.input`
  cursor: pointer;
  padding: 10px 23px;
  font-size: 1.2rem;
  background-color: #A2D64E;
  color: #fff;
  transform: skewX(-10deg);
  border: none;
  position: relative;
  &:hover{
  top: 1px;
  }
  
`;
const Input = styled.input`
  font-size: 1.2rem;
  padding: 10px 0;
  border-radius: 5px;
  border: 1px solid #333;
`;
const Span = styled.span`
  font-size: 1.2rem;
`;
const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: grey;
  font-size: 1.5rem;
  &:hover{
    color: black;
  }
`;
const P = styled.p`
  color: grey;
  margin: 40px 0 10px 0;
`;
const Icon = styled.i`
  margin-right: 5px;
`;
const Error = styled.p`
  color: red;
  padding-top: 3px;
  font-size: 1rem;
`;
const Nav = styled.nav`
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  @media only screen 
  and (min-width: 375px) 
  and (max-width: 812px) { 
  width: 100%;
  margin: 20px 0;
  }
`;
const NavFlex = styled.div`
  display: flex;
`;
const Loginn = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;
const Login = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
      console.log(data);
    };
    return(
        <Loginn>
            <Nav>
                <Logo/>
                <NavFlex>
                    <Lang/>
                    <Buynow/>
                </NavFlex>
            </Nav>
            <Container>
                <Flex>
                    <StyledLink to={'/login'}><H1>Logowanie</H1></StyledLink>
                    <StyledLink to={'/reg'}>Rejestracja</StyledLink>
                </Flex>
                <Facebook/>
                <P>lub</P>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <Span>E-mail<sup>*</sup></Span>
                        <Input type="email" name='email' ref={register({required:true})}/>
                        {errors.email && <Error>Podaj email</Error>}
                    </Label>
                    <Label>
                        <Span>Hasło<sup>*</sup></Span>
                        <Input type="password" name='password' ref={register({required:true})}/>
                        {errors.password && <Error>Podaj hasło</Error>}
                    </Label>
                    <Flex>
                        <Remember>
                            <Icon className="far fa-bell"></Icon>
                            <p>Przypomnij hasło</p>
                        </Remember>
                        <Submit type="submit" value="zaloguj się >"/>
                    </Flex>
                </Form>
                <Hint>* Dane wymagane</Hint>
            </Container>
            <Footer/>
        </Loginn>
    )
};

export default Login