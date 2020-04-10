import React from "react";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends React.Component {
    state = {todos: []}

    // Mock state
    // state = {todos: [
    //     {id: 0, task: "Do something", isCompleted: false},
    //     {id: 1, task: "Do again", isCompleted: true},
    // ]}

    addTodo = task => {
        const newTodo = {
            id: uuid(),
            task, 
            isCompleted: false,
        };

        this.setState(st => ({
            todos: [...st.todos, newTodo]
        }));
    }

    removeTodo = id => {
        this.setState(st => ({
            todos: st.todos.filter(todo => (todo.id !== id))
        }));
    }

    render() {
        const {todos} = this.state;

        return (
            <div>
                <h1>TodoList</h1>
                {todos.map(({id, task, isCompleted}) => (
                    <Todo 
                        key={id}
                        id={id}
                        task={task}
                        isCompleted={isCompleted}
                        removeHandler={this.removeTodo}
                    />
                ))}
                <NewTodoForm submitHandler={this.addTodo}/>
            </div>
        );
    }
}


export default TodoList;