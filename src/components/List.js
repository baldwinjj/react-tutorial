import React from 'react'
import Todo from './Todo'

const List = (props) => (
  <ul>
    {props.todos.map((todo, i) =>
      <li key={i}>
        <Todo todo={todo}/>
      </li>
    )}
  </ul>
)

export default List
