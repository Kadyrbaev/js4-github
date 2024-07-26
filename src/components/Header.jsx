import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  return (
    <Container >
        <Test>LOGO</Test>
        <Button onClick={props.onShowForm}>ADD PRODUCTS</Button>
    </Container>
  )
}

export default Header

const Test = styled.h1`
  color: red;
`
const Container= styled.div`
   background-color: bisque;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
`
export const Button = styled.button`
  padding: 6px 20px;
  cursor: pointer;
  background-color: #63ee0c;
  border: none;
  border-radius: 6px;
  &:hover{
    background-color: #368206;
  }
  &:active{
    background-color: grey;
  }
`
