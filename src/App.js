import React, { useState } from 'react'
import Expense from './components/Expense'
import "./App.css"

const App = () => {

  const arr = [20,"test", 5, "hello", 10]



  return (
    <div>
      <Expense/>
    </div>
  )
}

export default App
