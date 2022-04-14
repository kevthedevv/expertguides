import React from 'react'
import styled from "styled-components"
import Menu from '../components/Menu'
import Header from '../components/Header'
import QuestionsComponents from '../components/Questions'

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
const MenuArea = styled.div`
    z-index: 1;
`
const MainArea = styled.div`
    padding-top: 30px;
    grid-area: main;
    height: 100%;
  
`

const Questions = () => {
  return (
    <Wrapper>
        <MenuArea>
            <Menu />
        </MenuArea>
        <Container>
            <HeaderArea>
                <Header/>
            </HeaderArea>
            <MainArea>
                <QuestionsComponents/>
            </MainArea>
        </Container>
    </Wrapper>
    )
}

export default Questions