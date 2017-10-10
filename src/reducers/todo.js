import{getTodos} from '../lib/todoServices'

const initState = {
    todos: [],
    currentTodo: ''
}

const TODO_ADD = 'TODO_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val})

export const fetchTodos = () => {
    return () => {
        getTodos()
            .then(todos => console.log(todos))
    }
}

export default (state = initState, action) => {
    switch(action.type) {
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE:
            return{...state, currentTodo: action.payload}
        
            default:
            return state
    }
}