import React from 'react'
import GreetingCard from './GreetingCard'

const App = () => {
  return (
    <>
    <h1 style={{ textAlign:"center"}}>Official Greeting Cards Display</h1>
    <GreetingCard name="Oluwagbotemi Taiwo" message="You make me feel like sunshine" color= "Lightblue" />
    <GreetingCard name="Posi Gbelepawo" message="You can do anything you decide to do" color= "Orange" />
    <GreetingCard name="Ayomide Olowolonsoro" message="You can buy the world" color= "Green" />
      
    </>
  )
}

export default App