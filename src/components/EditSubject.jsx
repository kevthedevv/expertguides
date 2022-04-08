import React from 'react'
import styled from "styled-components"
import {  } from '@material-ui/icons'
import image from "../images/add_edit.jpg"


const Wrapper = styled.div`
    padding: 0 40px 0px 40px;
`
const Container = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 400px;
`
const PageTitle = styled.h1`
    color: #444444;
    font-size: 20px;
    font-weight: 100;
    padding-bottom: 50px;
    text-transform: uppercase;
`
const FormContainer = styled.div`
    width: 320px;
    height: 400px;
`
const Input = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    width: 300px;
`
const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    width: 300px;
    border: 1px solid #bbbbbb;
    margin: 20px 0  20px 0;
`
const Button = styled.button`
    width: 100px;
    padding: 10px;
    height: 45px;
    background-color: #43AAE5;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    margin-left: 5px;
    &:hover{
        background-color: #64A5FF;
    }
`
const Checkbox = styled.input`
    margin-right: 10px;
    
`
const CheckboxLabel = styled.span`
    color: #444444;
`

const ButtonContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: right;
    margin-top: 50px;
`
const EditSubject = () => {
  return (
        <Wrapper>
            <PageTitle>DIAGNOSTIC > EDIT SUBJECT</PageTitle>
            <Container>
                <Image src = {image}/>
                <FormContainer>
                        <InputContainer><Input placeholder="Subject name"/></InputContainer>
                        <InputContainer><Input placeholder="Time limit"/></InputContainer>
                        <Checkbox type="checkbox"/><CheckboxLabel>Is it active?</CheckboxLabel>
                        <ButtonContainer>
                            <Button>Cancel</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                       
                </FormContainer>
            </Container>
        </Wrapper>
  )
}

export default EditSubject