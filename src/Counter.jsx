import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        ADD 1
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Minus
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
