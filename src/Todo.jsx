import React from 'react';
import "./Todo.css";

class Todo extends React.Component {

    state = {
        editedTask: this.props.task, 
        isEditMode: false,
    }

    handleComplete = () => {
        this.props.completeHandler(this.props.id);
    }
    
    handleRemove = evt => {
        evt.preventDefault();
        this.props.removeHandler(this.props.id);
    }

    handleEditMode = evt => {
        evt.preventDefault();
        this.setState({isEditMode: true});
    }

    handleEdited = evt => {
        evt.preventDefault();
        let newTask = this.state.editedTask;
        this.props.editHandler(this.props.id, newTask);
        this.setState({isEditMode: false})
    }

    handleChange = evt => {
        this.setState({
            editedTask: evt.target.value
        });
    }


    render() {
        const {id, task, isCompleted} = this.props;
        const {isEditMode, editedTask} = this.state;

        const editForm = 
            <form onSubmit={this.handleEdited}>
                <input type="text" name="TaskEdit" value={editedTask} onChange={this.handleChange} />
                <input type="submit" value="Save"/>
            </form>;
        
        const todo = 
            <div>
                <input type="checkbox" id={id} checked={isCompleted} onChange={this.handleComplete}/>
                <label htmlFor={id}>{task}</label>
                <button name="Edit" onClick={this.handleEditMode} >Edit</button>
                <button name="Remove" onClick={this.handleRemove} >X</button>
            </div>;

        return (
            <div>
                {isEditMode ? editForm : todo}
            </div>
        );
    }
}


export default Todo;