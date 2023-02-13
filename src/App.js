import "./styles.css";
import { useEffect, useState, useReducer } from "react";
const ACTIONS = {
  INCREMENT:'Increment',
  DECREMENT:'Decrement'
}
const reducer = (state,action) => {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count:state.count+1};
    case ACTIONS.DECREMENT:
      return {count:state.count-1};
    default:
      return state.count;
  }
};
export default function App() {
  // const [value, setValue] = useState(0);
  // const [value1, setValue1] = useState(0);
  // useEffect(() => {
  //   console.log("Use Effect");
  // }, [value]);
  // return (
  //   <div className="App">
  //     <h1>Hello CodeSandbox</h1>
  //     <h2 onClick={() => setValue(value + 1)}>this is value1</h2>
  //     <h2 onClick={() => setValue1(value1 + 1)}>this is value2</h2>
  //     <p>value1 : {value}</p>
  //     <p>value2 : {value1}</p>
  //     <p>Hello</p>
  //   </div>
  // );
  // const [count, setCount] = useState(0);
  // const Increment = () => {
  //   setCount((prevState) => prevState + 1);
  // };
  // const Decrement = () => {
  //   setCount((prevState) => prevState - 1);
  // };
  // return (
  //   <div>
  //     <h2>Hello useReduce</h2>
  //     <button onClick={Decrement}>Decrement</button>
  //     <h3>{count}</h3>
  //     <button onClick={Increment}>Increment</button>
  //   </div>
  // );
  const [state,dispatch] = useReducer(reducer,{count:0});
  const Increment = () => {
    dispatch({type:ACTIONS.INCREMENT});
  };
  const Decrement = ()  => {
    dispatch({type:ACTIONS.DECREMENT});
  };
  return(
    <div>
      <button onClick={Increment}>Increment</button>
      <p>{state.count}</p>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
