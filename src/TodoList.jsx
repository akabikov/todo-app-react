import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                TodoList
                <Todo />
                <NewTodoForm />
            </div>
        );
    }
}


export default TodoList;