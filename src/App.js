import React, { useReducer, useState } from "react";
const initialValue = [];
const ACTIONS = {
  INCREMENT: "add"
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return [...state, newTodo(action.payload.name)];
    default:
      return state;
  }
};
const newTodo = (name) => {
  return { name: name, id: Math.random().toFixed(0) * 10 };
};
const App = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducerFn, initialValue);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.INCREMENT, payload: { name: name } });
    setName("");
  };
  console.log(todos);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
};
export default App;
