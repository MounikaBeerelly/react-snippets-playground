import React, { useState } from 'react'

const Togglecomponent = () => {

    const [show, setShow] = useState(false);

    const handleToggleButton = () => {
        setShow(prev => !prev);
    }
  return (
    <div>
      <p data-testid="status">Status: {show ? 'Heads' : 'Tails' }</p>
      <button onClick={handleToggleButton}>Toggle</button>
    </div>
  )
}

export default Togglecomponent
