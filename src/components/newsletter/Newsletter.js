import React from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Btn = styled.button`
  background-color: #A2D64E;
  width: 50px;
  height: 50px;
  padding: 10px;
  color: white;
  border: none;
  outline: none;
  transform: skewX(-10deg);
  font-size: 1.9rem;
  &:hover{
  background-color: #599f25;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 1.3rem;
  border: none;
  border-bottom: 1px solid #333;
  outline: none;
  margin-right: 10px;
`;
const H1 = styled.h1`
  margin: 20px 0;
  font-size: 2rem;
  color: #333;
`;
const Error = styled.p`
  color: red;
  padding-top: 3px;
  font-size: 1rem;
`;
const Newsletter = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return(
        <Container>
            <H1>Zapisz się do newslettera</H1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex>
                    <Input type="email" placeholder="Email" name="email" ref={register({required:true})}/>
                    <Btn> > </Btn>
                </Flex>
                {errors.email && <Error>Podaj email</Error>}
            </form>
        </Container>
    )
};
export default Newsletter