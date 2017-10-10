import React from 'react';

const ToDoItem = ({id, name, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} /> 
        {name}
    </li>
)

export default (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <ToDoItem key={todo.id} {...todo}/>)}
        </ul>      
  </div>

)