import React from 'react'
import styled from "styled-components"
import Main from '../pages/Main'
import Header from '../components/Header'
import DiagnosticComponent from '../components/Diagnostic'

const Wrapper = styled.div`
    display: flex;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const HeaderArea = styled.div`
    
`
const MainArea = styled.div`
    padding-top: 100px;
    grid-area: main;
    height: 100%;
`


const Diagnostic = () => {
  return (
<Wrapper>
    <Main />
    <Container>
        <HeaderArea>
        <Header/>
        </HeaderArea>
        <MainArea>
           <DiagnosticComponent/>
        </MainArea>
    </Container>
 
    
</Wrapper>
               
          
            
 
 
    
  )
}

export default Diagnostic