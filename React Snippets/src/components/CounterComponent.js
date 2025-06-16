import React, { useState } from 'react'

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

  return (
    <>
        <h1>Counter Component</h1>
        <p data-testid="counter">Count: {count}</p>
        <button 
            data-testid="increment"
            onClick={handleIncrement}
        >
            Increment
        </button>
        <button 
            data-testid="decrement"
            onClick={handleDecrement}
        >
            Decrement
        </button>
        <button 
            data-testid="reset"
            onClick={handleReset}
        >
            Reset
        </button>
    </>
  )
}

export default CounterComponent
