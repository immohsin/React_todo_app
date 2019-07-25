import React, {Component} from 'react';
import Todos from './todos'
import Addtodo from './addtodo'
class App extends Component {
  state = {
    todos: []
  }

  addTodo = (todo) => {
   todo.id = Math.random();
   const todos = [...this.state.todos, todo]
   this.setState({
     todos
   })
    
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return id !== todo.id
    })

    this.setState({
      todos
    })
    
  }
  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;