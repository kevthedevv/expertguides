import React from 'react'
import Header from '../components/Header'
import styled from "styled-components"
import logo from "../images/logo.png"
import { AssignmentOutlined, BorderColorOutlined, LocalHospitalOutlined, SpeedOutlined } from '@material-ui/icons'

const Wrapper = styled.div`
    /* display: grid;
    grid-template-columns: auto 85%;
    grid-template-rows: auto;
    grid-template-areas: 
    "menu header header header"
    "menu main main main";
    overflow: hidden; */
    
`
const Container = styled.div`
    grid-area: menu;
    height: 100vh;
    width: 300px;
    background-color: #43AAE5;
    display: flex;
    flex-direction: column;
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 300px;
    color: white;
    margin-left: -10px;
    padding-top: 20px;
    padding-bottom: 100px;

`
const Logo = styled.img`
    height: 75px;
   
`
const LogoLabel = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 30px;
    
`
const LogoLabelDescription = styled.p`
    
`
const LogoLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const MenuContainer = styled.div`
    width: 300px;
    overflow: hidden;
    color: white;
    padding-bottom: 50px;
`
const Menus = styled.div`
   
`
const MenuItemsParent = styled.p`
    padding-left: 40px;
    color: #444444;
`
const IconContainer = styled.div`
    padding-right: 10px;
    padding-top: 5px;
`
const MenuItems = styled.p`
    display: flex;
    align-items: center;
    padding: 10px 0 ;
    padding-left: 40px;
    font-size: 16px;
    &:hover{
        background-color: white;
        color: #43AAE5;
        cursor: pointer;
    }
`
const Menu = () => {
  return (
    <Wrapper>
    <Container>
        <LogoContainer>
            <Logo src={logo}/>
            <LogoLabelContainer>
                <LogoLabel>Expert Guides</LogoLabel>
                <LogoLabelDescription>Tutorial Services</LogoLabelDescription>
            </LogoLabelContainer>
        </LogoContainer>
        <MenuContainer>
            <MenuItemsParent>EXAM TYPES</MenuItemsParent>
            <Menus>
                <MenuItems><IconContainer><LocalHospitalOutlined/></IconContainer>Diagnostic Test</MenuItems>
                <MenuItems><IconContainer><BorderColorOutlined/></IconContainer>Mastery Test</MenuItems>
                <MenuItems><IconContainer><SpeedOutlined/></IconContainer>Speed Test</MenuItems>
                <MenuItems><IconContainer><AssignmentOutlined/></IconContainer>Mock Exam</MenuItems>
            </Menus>
        </MenuContainer>
        <MenuContainer>
            <MenuItemsParent>REPORTS</MenuItemsParent>
            <Menus>
                <MenuItems><IconContainer><LocalHospitalOutlined/></IconContainer>Student Grades</MenuItems>
                <MenuItems><IconContainer><BorderColorOutlined/></IconContainer>Other Datas</MenuItems>
            </Menus>
        </MenuContainer>
        <MenuContainer>
            <MenuItemsParent>SETTINGS</MenuItemsParent>
            <Menus>
                <MenuItems><IconContainer><LocalHospitalOutlined/></IconContainer>User's Information</MenuItems>
            </Menus>
        </MenuContainer>
    </Container>
  
    </Wrapper>
    
  )
}

export default Menu