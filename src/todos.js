import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = (todos.length > 0)? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You do not have any todo's to display. Add new todo's by filling the form</p>
    );
  


    return (
        <div className="todos collection">
        {todoList}
        </div>
    );
}

export default Todos;