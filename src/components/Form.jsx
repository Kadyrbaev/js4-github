import React, { useState } from 'react'
import styled from 'styled-components'

const Form = (props) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [date, setDate] = useState("")

  const titleHandler=(event)=>{
    setTitle(event.target.value)
  }
  const priceHandler=(event)=>{
    setPrice(event.target.value)
  }
  const dateHandler=(event)=>{
    setDate(event.target.value)
  }

  const addHandler=()=>{
    const data = {
      title: title,
      price,
      date: new Date(date)
    }
    props.onGetData(data)

    setTitle("")
    setPrice("")
    setDate("")
  }

  // two way data binding
  return (
    <FormStyle>
        <input value={title} onChange={titleHandler} type="text" />
        <input value={price} onChange={priceHandler} type="text" />
        <input value={date} onChange={dateHandler} type="date" />
        <button onClick={addHandler}>Add</button>
        <button onClick={props.onCloseForm}>Close</button>
    </FormStyle>
  )
}

export default Form


const FormStyle = styled.div`
  border: 2px solid;
  width: 300px;
  padding: 10px 14px;
  margin: auto;
  margin-top: 50px;

  input{
    width: 96%;
    padding: 6px;
    margin-top: 16px;
  }
  .inp{
    border-radius: 10px;
  }
`