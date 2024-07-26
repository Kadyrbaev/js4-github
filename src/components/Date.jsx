import React from 'react'

const Date = (props) => {
    const day = props.date.getDate()
    const month = props.date.getMonth()+1
    const year = props.date.getFullYear()
  return (
    <div>
        <span>{day}/</span>
        <span>{month}/</span>
        <span>{year}</span>
    </div>
  )
}

export default Date