import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }



  return (
    <div className='container'>
        <p>Count: {count}</p>
        <button onClick={increment} className='btn_incre'>Increment</button>
        <button onClick={decrement} className='btn_decre'>Decrement</button>
        <button onClick={reset} className='btn_reset'>Reset</button>
        
    </div>
  )
}

export default Counter