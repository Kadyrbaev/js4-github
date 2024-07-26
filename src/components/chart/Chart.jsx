import React from 'react'
import ChartBar from './ChartBar'
import styled from 'styled-components'

const Chart = (props) => {
  console.log(props);
  const months = [
    {
      month: "January",
      expense: 0
    },
    {
      month: "Feburary",
      expense: 0
    },
    {
      month: "March",
      expense: 0
    },
    {
      month: "April",
      expense: 0
    },
    {
      month: "May",
      expense: 0
    },
    {
      month: "June",
      expense: 0
    },
    {
      month: "July",
      expense: 0
    },
    {
      month: "August",
      expense: 0
    },
    {
      month: "September",
      expense: 0
    },
    {
      month: "October",
      expense: 0
    },
    {
      month: "Novomber",
      expense: 0
    },
    {
      month: "December",
      expense: 0
    },
  ]

  props.filterExpense.map((el)=>{
    const month = el.date.getMonth()
    months[month].expense = months[month].expense + +el.price
  })

  return (
    <ChartStyle>
        {/* <ChartBar expense={5000} month="January" />
        <ChartBar expense={12000} month="Feburary"/> */}
        {
          months.map((el)=>(
            <ChartBar key={el.month} month={el.month} expense={el.expense} />
          ))
        }
    </ChartStyle>
  )
}

export default Chart


const ChartStyle = styled.div`
    border: 2px solid red;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    background-color: #3a3838;
`



