import React from 'react'
import Todo from './Todo'
import style from '../styles/List.css'

const List = (props) => (
  <ul className={style.list}>
    {props.todos.map((todo, i) =>
      <li key={i}>
        <Todo todo={todo}/>
      </li>
    )}
  </ul>
)

export default List
