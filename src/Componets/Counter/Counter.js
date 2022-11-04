import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  increaseBy5,
  incrementAction,
  resetAction,
} from "../../Redux-File/Action/CounterAction";

const Counter = () => {
  const count = useSelector((state) => state.count); // access store
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h4>Counter App</h4>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      <button onClick={() => dispatch(resetAction())}>Reset</button>
      <button onClick={() => dispatch(increaseBy5(5))}>Increase 5</button>
    </div>
  );
};

export default Counter;
