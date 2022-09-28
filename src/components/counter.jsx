import React, { Component, useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `Count is ${count}`;
//   }, [count]);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)} className="btn btn-primary">
//         +
//       </button>
//       <button onClick={() => setCount(0)} className=" btn p-10">
//         Reset
//       </button>
//       <div>Count :{count}</div>
//     </div>
//   );
// };

class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleIncreament} className="m-3">
          +
        </button>
        <button onClick={this.handleReset}>Reset</button>
        <div>Count :{count}</div>
      </div>
    );
  }
}

export default Counter;
