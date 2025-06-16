import React, { useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startCounter();
    return stopCounter;
  }, []);

  const startCounter = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = window.setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stopCounter = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetCounter = () => {
    stopCounter();
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 data-testid="counter-value">Counter: {count}</h1>
      <button data-testid="stop-btn" onClick={stopCounter}>🛑 Stop</button>{' '}
      <button data-testid="start-btn" onClick={startCounter}>▶️ Start</button>{' '}
      <button data-testid="reset-btn" onClick={resetCounter}>🔄 Reset</button>
    </div>
  );
};

export default App;
