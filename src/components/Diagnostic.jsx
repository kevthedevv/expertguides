import { useState} from 'react'
import styled from "styled-components"
import {  } from '@material-ui/icons'


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
    color: #444444;
    font-size: 20px;
    font-weight: 100;
    padding-bottom: 50px;
    text-transform: uppercase;
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
    background-color: #43AAE5;
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
    background-color: #43AAE5;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    &:hover{
        background-color: #64A5FF;
    }
`

const RowButtons = styled.button`
    width: 100px;
    padding: 10px;
    height: 45px;
    background-color: #43AAE5;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: auto;
    padding: 20px;
    border-bottom: 1px solid #EBEBEB;
`
//Title which is "Subjects"
const TableTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: #444444;
`

//All table row
const TableRow = styled.tr`
    width: 100%;
`

const TableDesc = styled.td`
    width: 100%;
`

const TableHeader = styled.th`
    width: 100%;
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
`
const TableHeaderTitle = styled.p`
   color: #444444;
`

const RowButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 20px;
`

const Diagnostic = () => {

  
  return (

    <Wrapper>
        <PageTitle>Diagnostic Test</PageTitle>
        <Container>
            <InteractionContainer>
                <SearchContainer>
                    <InputContainer>
                        <Search/>
                    </InputContainer>
                    <SearchButton>Search</SearchButton>
                </SearchContainer>
               
            </InteractionContainer>
            <TableContainer>
            <TableTitleContainer><TableTitle>Subjects</TableTitle> <AddButton>Add New</AddButton> </TableTitleContainer>
                <Table>
                    <TableRow>
                        <TableHeaderContainer>
                        <TableHeader><TableHeaderTitle>Subject Name</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle>Questions Saved</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle>Time Limit</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle></TableHeaderTitle></TableHeader>
                        </TableHeaderContainer>
                    </TableRow>
                    <TableRow>
                        <TableHeaderContainer>
                        <TableDesc><TableHeaderTitle>Mathematics Proficiency</TableHeaderTitle></TableDesc>
                        <TableDesc><TableHeaderTitle>53</TableHeaderTitle></TableDesc>
                        <TableDesc><TableHeaderTitle>75M</TableHeaderTitle></TableDesc>
                        
                        <TableDesc>
                            <RowButtonsContainer>
                                <RowButtons>Edit</RowButtons>
                                <RowButtons>View</RowButtons>
                            </RowButtonsContainer>    
                        </TableDesc>
                        </TableHeaderContainer>
                    </TableRow>
                </Table>
            </TableContainer>
         
        </Container>
       
    </Wrapper>
    

   
  )
}

export default Diagnostic