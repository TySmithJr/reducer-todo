import React from 'react';
// created a todos function so my props from TodoList can pass down through
const Todos = (props) => {
    console.log(props,"props")
    return (
        <div>
            {/* gave the h1 a tenary operator to equate out to complete or false */}
           <h1 className={props.todo.completed ?"completed" : ""}onClick={()=> props.toggle(props.todo.id)}>{props.todo.item}</h1>
           <h1>{props.todo.completed ? "true" : "false"}</h1>
        </div>
    );
};

export default Todos;