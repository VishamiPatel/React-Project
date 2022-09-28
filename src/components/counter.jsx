import React, { Component, useState, useEffect } from "react";

const Counter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="m-3">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="m-3">
        -
      </button>
      <button onClick={() => setCount(count - 1)} className="m-3">
        -
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <div>Count :{count}</div>
    </div>
  );
};

export default Counter;
