import React from "react";
import { incNumber, decNumber } from "./Action/Index";
import { ChnageMyNo } from "./Reducer/ChnageMyNo";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./CounterMob.css";
function Counter() {
  let dispatch = useDispatch();
  let mystate = useSelector((state) => state.ChnageMyNo);
  return (
    <div className="counter-container">
      <button onClick={() => dispatch(incNumber())}>+</button>
      <p className="count">{mystate}</p>
      <button onClick={() => dispatch(decNumber())}>-</button>
    </div>
  );
}

export default Counter;
