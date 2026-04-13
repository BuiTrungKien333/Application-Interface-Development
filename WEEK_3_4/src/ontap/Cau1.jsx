import { useState } from "react";

export default function Bai1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: "green" }}
      >
        INCREASE
      </button>
      <button onClick={() => setCount(count - 1)}>DECREASE</button>
      <button onClick={() => setCount(0)} style={{ backgroundColor: "red" }}>
        RESET
      </button>
    </div>
  );
}
