import React from 'react';
import "./Todo.css";

class Todo extends React.Component {
    state = {isCompleted: this.props.isCompleted}

    handleComplete = evt => {
        this.setState(st => ({
            isCompleted: !st.isCompleted
        }));
    }

    handleRemove = () => {
        this.props.removeHandler(this.props.id);
    }

    render() {
        const {id, task} = this.props;
        const {isCompleted} = this.state;

        return (
            <div>
                <input type="checkbox" name="" id={id} checked={isCompleted} onChange={this.handleComplete}/>
                <label htmlFor={id}>{task}</label>
                <button onClick={this.handleRemove}>X</button>
            </div>
        );
    }
}


export default Todo;