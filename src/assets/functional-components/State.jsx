import React, { useState } from 'react'

const state = () => {
    const [time,setTime] = useState(0) //initialize state
    const incrementTime = () =>{       //increment function
        setTime(time+1);
    }
    const decrementTime = () =>{       //decrement function
        setTime(time-1);
    }
    const reset = () =>{       
        setTime(0);
    }
  return (
    <div>
      <h2>Time:{time} seconds</h2>
      <button onClick={incrementTime}>Increment</button>&nbsp;
      <button onClick={decrementTime}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default state
