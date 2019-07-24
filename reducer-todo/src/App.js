import React, { useReducer } from 'react';
import './App.css';
import TodoList from "./components/TodoList"
import UserForm from "./components/UserForm"
import { reducer, ADD_ITEM, initialState, REMOVE, TOGGLE } from "./reducers/Reducer"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <UserForm  add_item={add_item}/>
      <TodoList todos={state.todos} toggle={toggle} remove={remove}/>
      
    </div>
  );
}

export default App;
