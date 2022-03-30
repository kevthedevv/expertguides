import { EmailOutlined, LockOutlined } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import login from "../images/login.png"

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    
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


const Username = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
`
const UsernameContainer = styled.div`
display: flex;
padding: 10px;
width: 300px;
margin-bottom: 5px;
margin-top: 40px;
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
`
const Button = styled.button`
    width: 325px;
    padding: 10px;
    height: 50px;
    background-image: linear-gradient(to right,#5A23F4, #9336E7);
    color: white;
    cursor: pointer;
    border: 0;
`

    


const Login = () => {
  return (
    <Wrapper>
        <Container>
            <FormContainer>
                <H3>Welcome!</H3>
                <P>Please login to continue.</P>

                <UsernameContainer>
                    <EmailOutlined/>
                    <Username/>
                </UsernameContainer>
                <PasswordContainer>
                    <LockOutlined/>
                    <Password/>
                </PasswordContainer>
                <Button>Login</Button>
            </FormContainer>
            
        </Container>
    </Wrapper>
  )
}

export default Login