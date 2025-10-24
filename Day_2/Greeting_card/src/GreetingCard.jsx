import React from 'react'
import './App.css'

const GreetingCard = ({ name, message, color}) => {
  return (
    <div className='card' style={{ background: color }}>
      <h2 className='name'>My name is {name}</h2>
      <p className='msg'>{message}</p>
    </div>
  )
}

export default GreetingCard
