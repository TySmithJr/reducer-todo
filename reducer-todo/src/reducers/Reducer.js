


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



export const ADD_ITEM = "ADD_ITEM"
export const TOGGLE = "TOGGLE"
export const REMOVE = "REMOVE"

export const reducer = (state, action) => {
    switch (action.type) {
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