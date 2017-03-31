import React from 'react'
import Input from './Input'

import List from './List'

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
  <div>
    <Input/>
    <List todos={fakeState.todos}/>
  </div>
);

export default App;
