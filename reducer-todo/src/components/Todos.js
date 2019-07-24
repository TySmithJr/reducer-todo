import React from 'react';

const Todos = (props) => {
    console.log(props,"props")
    return (
        <div>
           <h1 className={props.todo.completed ?"completed" : ""}onClick={()=> props.toggle(props.todo.id)}>{props.todo.item}</h1>
           <h1>{props.todo.completed ? "true" : "false"}</h1>
        </div>
    );
};

export default Todos;