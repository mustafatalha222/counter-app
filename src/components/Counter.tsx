import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h1> {count}</h1>
      <br />
      <button onClick={decrement} disabled={!count}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
