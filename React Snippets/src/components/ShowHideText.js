import React, { useState } from 'react';

const ShowHideText = () => {
    const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Show Text</button>
      { show && <p>Hide and show text</p> }
    </>
  )
}

export default ShowHideText;
