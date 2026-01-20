import React, { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const incr = () => {
    setCounter(counter + 1);
  };
  const decr = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <button onClick={incr}>+</button>
      <h4>{counter}</h4>
      <button onClick={decr}>-</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
