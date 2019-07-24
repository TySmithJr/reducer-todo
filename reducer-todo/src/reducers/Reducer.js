

// created a variable to store objects of arrays inside my state
export const initialState = { 
    todos:[
        {
            item: 'Task 1',
            completed: false,
            id: 123
          },
          {
            item: 'Task 2',
            completed: false,
            id: 1234
          },
          {
            item: 'Task 3',
            completed: false,
            id: 12345
          },
]}


// created variables for my cases so mispellings won't break my code down the line
export const ADD_ITEM = "ADD_ITEM"
export const TOGGLE = "TOGGLE"
export const REMOVE = "REMOVE"

// created a reducer funtion which holds state & an action , which also is a pure function to do away with side effects
export const reducer = (state, action) => {
  // created a switch function to pass in the action.type
    switch (action.type) {
      // created cases (action.type) to execute lines of code if they are true if will return to default statement
      case ADD_ITEM: 
        const newItem = {item:action.payload, completed:false, id: Date.now()}
        return {...state, todos:[...state.todos,newItem]
        }
        case TOGGLE: return {...state, todos:state.todos.map((todo)=> {
          if(action.payload === todo.id) {
            return {...todo, completed:! todo.completed}
          } return todo 

        })}
        case REMOVE: return {...state, todos:state.todos.filter((todo ) =>! todo.completed) }
       default: return state; 
    }
}