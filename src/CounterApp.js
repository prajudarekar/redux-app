import React from "react";
import { incNumber, decNumber } from "./Action/Index";
import { ChnageMyNo } from "./Reducer/ChnageMyNo";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
function CounterApp() {
  let dispatch = useDispatch();
  let mystate = useSelector((state) => state.ChnageMyNo);
  return (
    <div>
      <p>{mystate}</p>
      <button onClick={() => dispatch(incNumber())}>INCREMENT</button>
      <button onClick={() => dispatch(decNumber())}>DECREMENT</button>
    </div>
  );
}

export default CounterApp;
