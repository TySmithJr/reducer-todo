import React, { useReducer } from 'react';
import './App.css';
import TodoList from "./components/TodoList"
import UserForm from "./components/UserForm"
import { reducer, ADD_ITEM, initialState, REMOVE, TOGGLE } from "./reducers/Reducer"

function App() {
  // created an useReduce hook which has to have a state and a dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
// importing my cases in so the dispatch can handle the action types and payloads
  const add_item = (e, item) => {
    e.preventDefault();
    dispatch({type: ADD_ITEM, payload:item})
  }
  const toggle = (id) => {
    dispatch({type: TOGGLE, payload:id})
  }
  const remove = (e) => {
    e.preventDefault();
    dispatch({type:REMOVE})
  }
  return (
    <div className="App">
    {/* passing down add_item function */}
      <UserForm  add_item={add_item}/>
      {/* passed down my functions as props */}
      <TodoList todos={state.todos} toggle={toggle} remove={remove}/>
      
    </div>
  );
}

export default App;
