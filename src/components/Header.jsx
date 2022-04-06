import React from 'react'
import styled from "styled-components"
import {  } from '@material-ui/icons'
import avatar from "../images/avatar.png"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 2px 8px #e4e4e4;
    overflow: hidden;

`
const Avatar = styled.img`
    height: 40px;
    cursor: pointer;
`
const Label = styled.h1`
    font-size: 20px;
    padding-right: 20px;
    font-weight: 100;
    padding-left: 50px;
`
const User = styled.h1`
    font-size: 20px;
    padding-right: 20px;
    font-weight: 100;
`
const UserContainer = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    padding-right: 50px;
`
const Header = () => {
  return (
    <Container>
      <Label>Expert Guides Tutorial Services  | College Entrance Exam Review</Label>
      <UserContainer>
        <User>Adminstrator</User>
        <Avatar src={avatar}/>
      </UserContainer>
    </Container>
    
  )
}

export default Header