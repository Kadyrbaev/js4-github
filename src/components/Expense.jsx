import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import ExpenseItem from './ExpenseItem'
import styled from 'styled-components'
import Chart from './chart/Chart'

const products = [
    {
        title: "Phone",
        price: 2000,
        date: new Date('5, 10, 2023'),
        id: "1s",
    },
    {
        title: "Phone",
        price: 2000,
        date: new Date('5, 10, 2023'),
        id: "1s",
    },
    {
        title: "Phone",
        price: 2000,
        date: new Date('5, 10, 2023'),
        id: "1s",
    },
    {
        title: "Taxi",
        price: 500,
        date: new Date(),
        id: "2s"
    },
    {
        title: "Laptop",
        price: 5000,
        date: new Date('6,25,2020'),
        id: "3s"
    },

]

const Expense = () => {
    const [form, setForm] = useState(true)
    const [expense, setExpense] = useState(products)
    const [year, setYear] = useState("2024")
    const [color, setColor] = useState("")
    console.log(color);

    const showForm=()=>{
        setForm(true)
    }
    const closeForm=()=>{
        setForm(false)
    }

    const getData=(data)=>{
        console.log(data);
        setExpense([...expense,data])    // []  
    }

    const filteredByYear=(e)=>{
        setYear(e.target.value)
    }

    const filterExpense = expense.filter((el)=>{
        console.log(el.date.getFullYear());
        const yearDate = el.date.getFullYear().toString()
        return year===yearDate
    })

    const colorHandler=(e)=>{
        setColor(e.target.value)
    }
  return (
    <div>
        <Header onShowForm={showForm}/>
        {form===true ? <Form onGetData={getData} onCloseForm={closeForm}/> : null}
        <Chart filterExpense={filterExpense} />
        <hr />
        <Select onChange={filteredByYear} name="" id="">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </Select>
        <hr />
        <Select onChange={colorHandler} name="" id="">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="gold">gold</option>
            <option value="green">green</option>
        </Select>

        {filterExpense.length<1 && <h1 style={{textAlign: "center"}}>NOT FOUND</h1>}
        <WrapperExpenseItem>
            {
                filterExpense.map((el)=>(
                    <ExpenseItem key={el.id} color={color} title={el.title} price={el.price} date={el.date} />
                ))
            }
        </WrapperExpenseItem>
    </div>
  )
}

export default Expense


const WrapperExpenseItem = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column-reverse;
`

const Select = styled.select`
    padding: 6px 20px;
    font-size: 18px;
`