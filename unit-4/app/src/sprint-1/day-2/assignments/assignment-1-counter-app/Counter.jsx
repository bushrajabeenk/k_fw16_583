import React from 'react';
import { useState } from 'react';

function Counter(props) {

    const [count, setCount] = useState(props.initCount);

    const increment = () => {
        setCount((count) => count + 1);
    }

    const decrement = () => {
        if(count === 0)
        {
            return;
        }
        setCount((count) => count - 1);
    }

    const doubleInc = () => {
        setCount((count) => count * 2);
    }

    const reset = () => {
        setCount(0);
    }



  return (
    <>
        <p>COUNTER : {count}</p>
        <br />
        <button onClick={() => increment()} >INCREMENT</button>
        <button onClick={() => decrement()} >DECREMENT</button>
        <button onClick={() => doubleInc()} >DOUBLE</button>
        <button onClick={() => reset()} >RESET</button>
    </>
  )
}

export default Counter;