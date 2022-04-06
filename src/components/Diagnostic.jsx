import React from 'react'
import styled from "styled-components"
import {  } from '@material-ui/icons'
import avatar from "../images/avatar.png"

const Wrapper = styled.div`
    height: 100%;
    padding: 0 40px 0px 40px;
  
    
    
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
`

const PageTitle = styled.h1`
    color: black;
    font-size: 20px;
    font-weight: 100;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
`
const Search = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    padding-left: 10px;
    width: 300px;
`
const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    width: 300px;
    border: 1px solid #bbbbbb;
    margin-right: 10px;
`
const SearchButton = styled.button`
    width: 100px;
    padding: 10px;
    height: 45px;
    background-color: #046BF7;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    &:hover{
        background-color: #64A5FF;
    }
`
const AddButton = styled.button`
    width: 100px;
    padding: 10px;
    height: 45px;
    background-color: #046BF7;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    &:hover{
        background-color: #64A5FF;
    }
`
//Container of search, add button.
const InteractionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
`
//Container of the Table
const TableContainer = styled.div`
    border-radius: 10px;
    box-shadow: 0px 2px 8px #bebebe;
    width: 100%;
    height: 500px;
`

//Table itself
const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    text-align: left;
    overflow: hidden;
    padding: 0;
    margin: 0;
`
//Table Title Container
const TableTitleContainer = styled.div`
    height: 30px;
    width: auto;
    padding: 20px;
    border-bottom: 1px solid #EBEBEB;
    border: solid red 1px;
`
//Title which is "Subjects"
const TableTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`

//All table row
const TableRow = styled.tr`
    width: 100%;
    border: solid red 1px;
`

const TableHeader = styled.th`
    width: 500px;
    border: solid red 1px;
`
const TableHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    height: 10px;
    width: 100%;
    border-bottom: 1px solid #EBEBEB;
    padding: 20px 0 20px 15px;
    overflow: hidden;
    border: solid red 1px;
`
const TableHeaderTitle = styled.p`
   
`

const Diagnostic = () => {
  return (
    <Wrapper>
        <PageTitle>Diagnostic</PageTitle>
        <Container>
            <InteractionContainer>
                <SearchContainer>
                    <InputContainer>
                        <Search/>
                    </InputContainer>
                    <SearchButton>Search</SearchButton>
                </SearchContainer>
                <AddButton>Add New</AddButton>
            </InteractionContainer>
            <TableContainer>
            <TableTitleContainer><TableTitle>Subjects</TableTitle></TableTitleContainer>
                <Table>
                    <TableRow>
                        <TableHeaderContainer>
                        <TableHeader><TableHeaderTitle>Subject Name</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle>Questions Saved</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle>Action</TableHeaderTitle></TableHeader>
                        </TableHeaderContainer>
                    </TableRow>
                    <TableRow>
                        <TableHeaderContainer>
                        <TableRow><TableHeaderTitle>Mathematics Proficiency</TableHeaderTitle></TableRow>
                        <TableRow><TableHeaderTitle>53</TableHeaderTitle></TableRow>
                        <TableRow><AddButton>Edit</AddButton></TableRow>
                        <TableRow><AddButton>Edit</AddButton></TableRow>
                        </TableHeaderContainer>
                    </TableRow>
                </Table>
            </TableContainer>
         
        </Container>
    </Wrapper>
   
  )
}

export default Diagnostic