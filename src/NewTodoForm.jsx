import React from 'react';
import "./NewTodoForm.css";

class NewTodoForm extends React.Component {

    state = {task: ""}

    handleSubmit = evt => {
        evt.preventDefault();
        const {task} = this.state;
        if (task === "") return;
        this.props.submitHandler(task);
        this.setState({task: ""});
    }

    handleChange = evt => {
        this.setState({task: evt.target.value})
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        id="newTodo" 
                        placeholder="New ToDo..." 
                        value={this.state.task} 
                        onChange={this.handleChange} 
                    />
                    <button type="submit" title="Add new ToDo">
                        <i className="fas fa-plus"></i>
                    </button>
            </form>
        );
    }
}


export default NewTodoForm;