import React, { Component, useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} className="m-3">
        increament
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>Count :{count}</div>
    </div>
  );
};

export default Counter;
