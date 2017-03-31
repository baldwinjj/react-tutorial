import React from 'react'
import Input from './Input'
import List from './List'

import style from '../styles/App.css'

const fakeState = {
  todos: [{
      title: 'boilerplate',
      complete: true
    },{
      title: 'components',
      complete: false
    },{
      title: 'style',
      complete: false
    },{
      title: 'redux',
      complete: false
    }]
}

const App = () => (
  <div className={style.app}>
    <Input/>
    <List todos={fakeState.todos}/>
  </div>
);

export default App;
