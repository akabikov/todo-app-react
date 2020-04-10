import React from 'react';
import "./Todo.css";

class Todo extends React.Component {

    handleComplete = evt => {
        this.props.completeHandler(this.props.id);
    }

    handleEdit = () => {
        // 
    }

    handleRemove = () => {
        this.props.removeHandler(this.props.id);
    }

    render() {
        const {id, task, isCompleted} = this.props;

        return (
            <div>
                <input type="checkbox" name="" id={id} checked={isCompleted} onChange={this.handleComplete}/>
                <label htmlFor={id}>{task}</label>
                <button name="Edit" onClick={this.handleEdit} >Edit</button>
                <button name="Remove" onClick={this.handleRemove} >X</button>
            </div>
        );
    }
}


export default Todo;