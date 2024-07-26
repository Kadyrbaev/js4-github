import React from 'react'
import styled from 'styled-components'

const ChartBar = (props) => {
  const maxExpense = 30000
  const expensePros = props.expense*100/maxExpense
  return (
    <div>
        <Wrapper>
            <Inner height={expensePros}></Inner>
        </Wrapper>
        <span style={{color: "white"}}>{props.month}</span>
    </div>
  )
}

export default ChartBar


const Wrapper = styled.div`
    border: 1px solid;
    width: 50px;
    height: 240px;
    border-radius: 40px;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    background-color: aliceblue;
`

const Inner = styled.div`
    height: ${(props)=> props.height+"%"};
    background-color: red;

`