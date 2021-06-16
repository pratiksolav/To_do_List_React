import React from 'react'

function Todo(props) {
    return (
        <div className="listItem">
            <input type="checkbox" id="toggleComplete" checked={props.todo.complete} onChange={props.toggleComplete} />
            <h1 style={{
                textDecoration: props.todo.complete ? 'line-through' : ''
            }}>{props.todo.text}</h1>

        </div>
    )
}

export default Todo
