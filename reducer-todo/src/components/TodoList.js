import React from 'react';
import Todos from "./Todos";

const TodoList = (props) => {
    console.log(props)
    return (
        <div>
            {props.todos.map((todo, i)=>{
                return (
                    <Todos toggle={props.toggle}todo={todo} key={i}/>
                )
            })}
            <button onClick={props.remove}>Remove</button>
        </div>
    );
};

export default TodoList;