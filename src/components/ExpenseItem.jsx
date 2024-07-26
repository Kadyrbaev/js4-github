import React from 'react'
import Date from './Date';
import styled from 'styled-components';

const ExpenseItem = (props) => {
  return (
    <Wrapper color={props.color}>
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
        <Date date={props.date} />
    </Wrapper>
  )
}

export default ExpenseItem


const Wrapper = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 30px;
  margin-top: 20px;
  background-color: ${(props)=> props.color};
`