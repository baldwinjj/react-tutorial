import React from 'react'

const Todo = (props) => (
  <label>
    <input type="checkbox" name={props.todo.title} checked={props.todo.complete}/>
    {props.todo.title}
  </label>
)

export default Todo
