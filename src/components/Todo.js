import React from 'react'

const Todo = (props) => (
  <label>
    {props.todo.title}
    <input type="checkbox" name={props.todo.title} checked={props.todo.complete}/>
  </label>
)

export default Todo
