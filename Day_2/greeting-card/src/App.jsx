import React from "react";
import './App.css';
import GreetingCard from './GreetingCard';

function App() {

  return (
    <div className='body'>
      <GreetingCard 
       name="Oluwagbotemi Ayomiposi"
       message="You can make all you want to make"
       color={"rgba(0, 99, 5, 1)"}
      />

      <GreetingCard 
       name="Ayomide Gbelepawo"
       message="I make my money from home"
       color={"rgba(1, 100, 103, 1)"}
      />

      <GreetingCard 
       name="Atoke Rocks"
       message="She has the pen of a ready writer"
       color={"rgba(96, 0, 99, 1)"}
      />

    
    </div>
  )
}

export default App