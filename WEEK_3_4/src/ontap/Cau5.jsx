import useCounter from "./useCounter";

export default function Bai5() {
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
