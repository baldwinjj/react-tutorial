import React from 'react'
import style from '../styles/Input.css'

const Input = () => (
  <form>
    <input className={style.text} type="text" name="name"/>
    <input className={style.button} type="submit" value="Submit" />
  </form>
)

export default Input
