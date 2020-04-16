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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="newTodo">New ToDo</label>
                <div>
                    <input type="text" id="newTodo" onChange={this.handleChange} value={this.state.task} />
                    <button type="submit" title="Add new ToDo"><i className="fas fa-plus"></i></button>
                </div>
            </form>
        );
    }
}


export default NewTodoForm;