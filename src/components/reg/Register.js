import React from "react";
import SearchClub from "../nav/elements/SearchClub";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Logo from "../nav/elements/Logo";
import Lang from "../nav/elements/Lang";
import Buynow from "../nav/elements/Buynow";
import {useForm} from "react-hook-form";

const Nav = styled.nav`
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;
const NavFlex = styled.div`
  display: flex;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-bottom: 100px;
`;
const Form = styled.form`
  width: 50vw;
`;
const Label = styled.label`
  display: block;
  margin: 20px 0;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 25px;
  font-size: 1.1rem;
  border-color: ${props => props.error ? "red" : " #333"};
  &:focus{
    outline: none;
    border: #A2D64E;
    box-shadow: 0 0 2px 4px #A2D64E;
  }
`;
const Button = styled.button`
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
const LabelCheck = styled.label`
display: flex;
align-items: center;

`;
const Icon = styled.i`
  color: white;
  padding-top: 3px;
  font-size: 1.3rem;

`;
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity:0;
  z-index: 2;
  &:checked + ${Icon} {
    color: #A2D64E;
  }
`;
const CheckOver = styled.div`
  text-align: center;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  user-select: none;
  width: 30px;
  height: 30px;
  border: 3px solid #A2D64E;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Error = styled.p`
  color: red;
  padding-top: 3px;
  font-size: 1rem;
`;
const Register = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = (data) => {
    console.log(data);
    };
    return(
        <div>
            <Nav>
                <Logo/>
                <NavFlex>
                    <Lang/>
                    <Buynow/>
                </NavFlex>
            </Nav>
            <Container>
                <h1>Rejestracja</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        MIASTO
                        <SearchClub/>
                    </Label>
                    <Label>
                        IMIĘ
                        <Input type="text" name="name" ref={register({required:true})}/>
                        {errors.name && <Error>Podaj imię</Error>}
                    </Label>
                    <Label>
                        NAZWISKO
                        <Input type="text" name="surname" ref={register({required:true})}/>
                        {errors.surname && <Error>Podaj nazwisko</Error>}
                    </Label>
                    <Label>
                        TELEFON
                        <Input type="tel" name="tel" ref={register({required:true,minLength:9})}/>
                        {errors.tel && <Error>Podaj numer</Error>}
                    </Label>
                    <Label>
                        ADRES EMAIL
                        <Input type="email" name="email" ref={register({required:true})}/>
                        {errors.email && <Error>Podaj email</Error>}
                    </Label>
                    <Label>
                        HASŁO
                        <Input type="password" name="pass" ref={register({required:true,minLength: 6})}/>
                        {errors.pass && <Error>Hasło musi zawierać przynajmniej 6 liter</Error>}
                    </Label>
                    <Label>
                        POWTÓRZ HASŁO
                        <Input type="password" name="passagain" ref={register({validate: (value) => value === watch('pass')})}/>
                        {errors.passagain && <Error>Podane hasła się różnią</Error>}
                    </Label>
                    <Flex>
                        <LabelCheck>
                            <CheckOver>
                                <Checkbox type="checkbox" name="terms" ref={register({required:true})}/>
                                <Icon className="fas fa-check"></Icon>
                                {errors.terms && <Error>Akceptuj regulamin</Error>}
                            </CheckOver>
                            <span>Akceptuje Regulamin</span>
                        </LabelCheck>
                        <Button>zarejestruj ></Button>
                    </Flex>
                </Form>
            </Container>
            <Footer/>
        </div>
    )
};

export default Register
