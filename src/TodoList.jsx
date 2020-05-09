import React from "react";
import {v4 as uuid} from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";


class TodoList extends React.Component {

    state = {todos: this.readStorage() || []}
    
    
    readStorage() {
        return JSON.parse(localStorage.getItem("todos"));
    }
    
    updateStorage = () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }


    addTodo = task => {
        const newTodo = {
            id: uuid(),
            task, 
            isCompleted: false,
        };

        this.setState(st => ({
            todos: [...st.todos, newTodo]
        }), this.updateStorage);
    }

    compliteTodo = id => {
        this.setState(st => ({
            todos: st.todos.map(todo => (
                (todo.id === id) 
                ? {...todo, isCompleted: !todo.isCompleted} 
                : todo
                ))
        }), this.updateStorage);
    }

    editTodo = (id, task) => {
        this.setState(st => ({
            todos: st.todos.map(todo => (
                (todo.id === id) 
                ? {...todo, task} 
                : todo
                ))
        }), this.updateStorage);
    }

    removeTodo = id => {
        this.setState(st => ({
            todos: st.todos.filter(todo => (todo.id !== id))
        }), this.updateStorage);
    }


    render() {

        const todoList = 
            this.state.todos.map(({id, task, isCompleted}) => (
                <Todo 
                    key={id}
                    id={id}
                    task={task}
                    isCompleted={isCompleted}
                    completeHandler={this.compliteTodo}
                    editHandler={this.editTodo}
                    removeHandler={this.removeTodo}
                />
            ));

        return (
            <div className="TodoList">
                <ul className="list">
                    {todoList}
                </ul>
                <NewTodoForm submitHandler={this.addTodo}/>
            </div>
        );
    }
}


export default TodoList;