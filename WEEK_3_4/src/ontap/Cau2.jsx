import { useReducer, useState } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    case "reset":
      return 0;
  }
};

export default function Bai2() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => dispatch({ type: "increase" })}
        style={{ backgroundColor: "green" }}
      >
        INCREASE
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>DECREASE</button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        style={{ backgroundColor: "red" }}
      >
        RESET
      </button>
    </div>
  );
}
