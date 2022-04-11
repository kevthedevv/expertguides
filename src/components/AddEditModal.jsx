import React, { useState } from 'react';
import {  } from '@material-ui/icons'
import Modal from 'react-bootstrap/Modal'
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';



const Wrapper = styled.div`
    padding: 0 40px 0px 40px;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const FormContainer = styled.div`
    width: 320px;
    height: auto;
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

const AddEditModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
      <>
       <Button onClick={handleShow}>
       ADD 
      </Button>

      <Modal show={show} onHide={handleClose} centered>
     <Modal.Header closeButton>
       <Modal.Title>Add Subject</Modal.Title>
     </Modal.Header>
     <Modal.Body>
      
     <Wrapper>
            <Container>
                <FormContainer>
                        <InputContainer><Input placeholder="Subject name"/></InputContainer>
                        <InputContainer><Input placeholder="Time limit"/></InputContainer>
                        <Checkbox type="checkbox"/><CheckboxLabel>Is it active?</CheckboxLabel>
                </FormContainer>
            </Container>
        </Wrapper>
     </Modal.Body>
     <Modal.Footer>
       <Button onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={handleClose}>
         Add 
       </Button>
     </Modal.Footer>
   </Modal>
      </>
    
  )
}

export default AddEditModal