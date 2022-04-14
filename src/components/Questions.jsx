import { useState} from 'react'
import styled from "styled-components"
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from '@material-ui/icons'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonBlue } from './Styles';



const ModalWrapper = styled.div`
    padding: 0 40px 0px 40px;
`
const ModalContainer = styled.div`
  
`
const ModalFormContainer = styled.div`
    width: auto;
    height: 600px;
`
const ModalInput = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    width: 300px;
`
const ModalInputContainer = styled.div`
    display: flex;
    padding: 10px;
    width: 300px;
    border: 1px solid #bbbbbb;
    margin: 20px 0  20px 0;
`
const ModalButton = styled.button`
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
const ModalCheckbox = styled.input`
    margin-right: 10px;
    
`
const ModalCheckboxLabel = styled.span`
    color: #444444;
`


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
    background-color: #afafaf;
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
    padding: 40px 20px 40px 20px;
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
    padding: 20px;
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
    padding: 30px 0 30px 15px;
    overflow: hidden;
`
const TableHeaderTitle = styled.p`
   color: #444444;
   padding: 0;
   margin: 0;
`

const RowButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 10px;
`
const OrderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
`
const OrderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    padding: 10px;
    height: 35px;
    background-color: #43AAE5;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    margin-right: 20px;
    &:hover{
        background-color: #64A5FF;
    }
    
`

const DivCentered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const DivLeft = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`
const DivRight = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`
const DivSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DivSpaceAround = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ModalQuestionDirection = styled.input`
    margin-right: 20px;
`
const ModalLabel = styled.p`
    padding: 0;
    margin: 0;
    font-size: 16px;
    margin-right: 10px;

`
const ModalInputQuestion = styled.textarea`
    width: 100%;
    &textarea:focus{
        outline: none;
    }
`
const ModalH1 = styled.h1`
    font-size: 20px;
    font-weight: 100;
    color: #444444;
    margin: 0;
    margin-right: 30px;
`
const ModalAnswerInput = styled.input`
    border: 0;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    width: 100%;
`
const ModalAnswerInputContainer = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    border: 1px solid #bbbbbb;
    margin: 20px 0  20px 0;
`
const Questions = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (

    <Wrapper>
        <PageTitle>Items</PageTitle>
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
            <TableTitleContainer><TableTitle>Questions / Directions</TableTitle> <AddButton onClick={handleShow}>Add New</AddButton> </TableTitleContainer>
                <Table>
                    <TableRow>
                        <TableHeaderContainer>
                        <TableHeader><TableHeaderTitle>Index</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle>Items</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle>Details</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle>Order</TableHeaderTitle></TableHeader>
                        <TableHeader><TableHeaderTitle></TableHeaderTitle></TableHeader>
                        </TableHeaderContainer>
                    </TableRow>
                    <TableRow>
                        <TableHeaderContainer>
                        <TableDesc><TableHeaderTitle>1</TableHeaderTitle></TableDesc>
                        <TableDesc><TableHeaderTitle>INSTRUCTION</TableHeaderTitle></TableDesc>
                        <TableDesc><TableHeaderTitle>Fill in the blanks</TableHeaderTitle></TableDesc>
                        <TableDesc><TableHeaderTitle><OrderButtonsContainer><OrderButton><ArrowDropDownOutlined></ArrowDropDownOutlined></OrderButton><OrderButton><ArrowDropUpOutlined/></OrderButton></OrderButtonsContainer></TableHeaderTitle></TableDesc>
                        <TableDesc>
                            <RowButtonsContainer>
                                <RowButtons onClick={handleShow}>Modify</RowButtons>
                            </RowButtonsContainer>    
                        </TableDesc>
                        </TableHeaderContainer>
                    </TableRow>
                </Table>
            </TableContainer>
         
        </Container>
        <Modal show={show} onHide={handleClose} centered size="xl">
            <Modal.Header closeButton>
            <Modal.Title>Add Question or Direction</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <ModalWrapper>
                        <ModalContainer>
                            <DivSpaceBetween style={{marginBottom: "20px"}}>
                                <DivCentered>
                                    <DivCentered><ModalLabel>Question</ModalLabel> <ModalQuestionDirection type="radio" name="question"/></DivCentered>
                                    <DivCentered><ModalLabel>Direction</ModalLabel> <ModalQuestionDirection type="radio" name="direction"/></DivCentered>
                                </DivCentered>
                                <DivCentered>
                                    <DivCentered>
                                        <ModalLabel>Upload image:</ModalLabel>
                                        <ModalButton>Import</ModalButton>
                                    </DivCentered>
                                </DivCentered>
                            </DivSpaceBetween>
                            <ModalInputQuestion  type="textarea" rows="10" cols="30" style={{marginBottom: "20px"}}/>
                            <ModalCheckbox type="checkbox"/><ModalCheckboxLabel>Multiple choice question?</ModalCheckboxLabel>
                            <DivLeft style={{marginTop: "20px"}}>
                                <ModalCheckboxLabel style={{paddingRight: "40px"}}>Answer 1</ModalCheckboxLabel>
                                <ModalCheckbox type="checkbox"/><ModalCheckboxLabel>Correct Answer?</ModalCheckboxLabel>
                            </DivLeft>
                            <ModalAnswerInputContainer><ModalAnswerInput/></ModalAnswerInputContainer>
                            <DivLeft>
                                <ModalCheckboxLabel style={{paddingRight: "40px"}}>Answer 2</ModalCheckboxLabel>
                                <ModalCheckbox type="checkbox"/><ModalCheckboxLabel>Correct Answer?</ModalCheckboxLabel>
                            </DivLeft>
                            <ModalAnswerInputContainer><ModalAnswerInput/></ModalAnswerInputContainer>
                            <DivLeft>
                                <ModalCheckboxLabel style={{paddingRight: "40px"}}>Answer 3</ModalCheckboxLabel>
                                <ModalCheckbox type="checkbox"/><ModalCheckboxLabel>Correct Answer?</ModalCheckboxLabel>
                            </DivLeft>
                            <ModalAnswerInputContainer><ModalAnswerInput/></ModalAnswerInputContainer>
                        </ModalContainer>
                        <DivLeft>
                        <ModalButton>+</ModalButton>
                        </DivLeft>
                        
                    </ModalWrapper>
                </Modal.Body>
            <Modal.Footer>
                <ModalButton onClick={handleClose}>Close</ModalButton>
                <ModalButton>Add</ModalButton>
            </Modal.Footer>
   </Modal>
       
    </Wrapper>
    

   
  )
}

export default Questions