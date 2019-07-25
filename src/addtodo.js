import React, {Component} from 'react'

class Addtodo extends Component {

    state = {
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><b>Add your new todo here:</b></label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} required/>
                </form>
            </div>
        )
    }
}

export default Addtodo;