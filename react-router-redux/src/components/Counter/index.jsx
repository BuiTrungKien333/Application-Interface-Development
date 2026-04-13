import { useSelector, useDispatch } from "react-redux";
import { up, down, reset } from "../../actions/counter";

function Counter() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(up())}>UP</button>
      <button onClick={() => dispatch(down())}>DOWN</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
}

export default Counter;
