import React, { useState } from "react";

const Togglebutton = () => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default Togglebutton;
