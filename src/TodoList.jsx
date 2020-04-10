import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends React.Component {
    // state = {todos: []}

    // Mock state
    state = {todos: [
        {id: 0, task: "Do something", isCompleted: false},
        {id: 1, task: "Do again", isCompleted: true},
    ]}

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
                <NewTodoForm />
            </div>
        );
    }
}


export default TodoList;