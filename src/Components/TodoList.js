import React, { Component } from 'react'
import Todo from './Todo'
import TodoFrom from './TodoFrom'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            filter: "all"
        }
    }

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo
                }
            })
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => id !== todo.id)
        })
    }

    Complete = () => {
        this.setState({
            todos: this.state.todos.map(todo => {
                return {
                    ...todo,
                    complete: true
                }
            })
        })
    }

    notComplete = () => {
        this.setState({
            todos: this.state.todos.map(todo => {
                return {
                    ...todo,
                    complete: false
                }
            })
        })
    }

    deleteComplete = () => {
        console.log("Clicked")
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }


    render() {


        let todos = []

        if (this.state.filter === "all") {
            todos = this.state.todos
        }
        else if (this.state.filter === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)
        }
        else if (this.state.filter === "completed") {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return (
            <div >
                <h3 className="leftTodo">To-dos Left: {
                    this.state.todos.filter(todo => !todo.complete).length
                }</h3>

                <div className="filterButtons">
                    <button onClick={() => this.setState({ filter: "all" })}>All</button>
                    <button  title="All Active Tasks Currently " onClick={() => this.setState({ filter: "active" })} > Active</button>
                    <button  title="All Completed Tasks Currently " onClick={() => this.setState({ filter: "completed" })} > Completed</button>

                </div>

                <div className="switches">
                   <button title="This will mark all Tasks as Completed" onClick={this.Complete} >Select All</button>

                    <button title="This will mark all Tasks as Active" onClick={this.notComplete}>Deselect All</button>
                    <button onClick={this.deleteComplete} disabled={
                        this.state.todos.filter(todo => todo.complete).length ? false : true
                    }>Clear Completed Tasks</button>
                </div>
                <TodoFrom onSubmit={this.addTodo} />
                <div className="list">
                    {todos.map(todo => (
                        < Todo key={todo.id} todo={todo}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            deleteTodo={() => this.deleteTodo(todo.id)}
                        />
                    ))}
                </div>

            </div>
        )
    }
}

export default TodoList
