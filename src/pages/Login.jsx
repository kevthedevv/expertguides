import { EmailOutlined, LockOutlined } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import login from "../images/login.jpg"
import logo from "../images/logo_blue.png"


const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    width: 800px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 500px;
`
const FormContainer = styled.div`
    flex: 1;
    justify-content: center;
    width: 400px;
`
const H3 = styled.h3`
    font-size: 30px;
    letter-spacing: 2px;
`
const P = styled.p`
 
`
const P2 = styled.p`
    margin-bottom: 10px;
`
const Username = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    padding-left: 10px;
    width: 300px;
`
const UsernameContainer = styled.div`
    display: flex;
    padding: 10px;
    width: 300px;
    margin-bottom: 5px;
    border: 1px solid #bbbbbb;
`
const PasswordContainer = styled.div`
    display: flex;
    padding: 10px;
    width: 300px;
    margin-bottom: 5px;
    margin-bottom: 30px;
    border: 1px solid #bbbbbb;
   
`
const Password = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
    &[type="password"] {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
    }
    padding-left: 10px;
    width: 300px;
`
const Button = styled.button`
    width: 325px;
    padding: 10px;
    margin-bottom: 20px;
    height: 50px;
    background-color: #046BF7;
    color: white;
    cursor: pointer;
    border: 0;
    &:hover{
        background-color: #64A5FF;
       
    }
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 50px;
`
const WordmarkContainer = styled.div`
`

const Logo = styled.img`
    height: 50px;
    padding-right: 10px;
    margin-bottom: 10px;
`


const Login = () => {
  return (
    <Wrapper>
        <Container>
            <Image src={login}/>
            <FormContainer>
                <LogoContainer>
                  <Logo src={logo}/>
                    <WordmarkContainer>
                    <H3>Expert Guides</H3>
                    <P>Tutorial Services</P>
                    </WordmarkContainer>
              
                </LogoContainer>
              
                <P2>Login to continue</P2>
                <UsernameContainer>
                    <EmailOutlined/>
                    <Username placeholder="Username"/>
                </UsernameContainer>
                <PasswordContainer>
                    <LockOutlined/>
                    <Password  type="password" placeholder="Password"/>
                </PasswordContainer>
                <Button>Login</Button>
                <P>Don't have an account? Sign up here.</P>
            </FormContainer>
        </Container>
    </Wrapper>
  )
}

export default Login