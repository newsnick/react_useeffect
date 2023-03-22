import React, { useEffect, useState } from 'react'
import './assets/styles/App.css'
import Counter from './components/Counter/Counter'
import MountMessage from './components/MountMessage/MountMessage'
import UpdateTitle from './components/UpdateTitle/UpdateTitle'
import CurrentTime from './components/CurrentTime/CurrentTime'

function App() {
  return (
    <div className="container">
      <mark>
        1. Create a component that updates a counter every time the component
        mounts using useEffect.
        <Counter />
      </mark>
      <mark>
        2. Create a component that displays a message on the screen every time
        the component mounts using useEffect.
        <MountMessage />
      </mark>
      <mark>
        4. Create a component that updates the document title every time the
        component mounts using useEffect.
        <UpdateTitle title="New Title" />
      </mark>
      <div></div>
      <mark>
        5. Create a component that logs the current time to the console every 5
        seconds using setInterval and useEffect.
        <CurrentTime />
      </mark>
    </div>
  )
}

export default App

/* import React, { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'First todo',
    },
    {
      id: 2,
      title: 'Second todo',
    },
  ])

  const [todoTitle, setTodoTitle] = useState('')
  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          title: todoTitle,
          completed: false,
        },
      ])
    }
  }

  return (
    <div className="container">
      <h1>Todo app</h1>

      <div className="input-field">
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Todo name</label>
      </div>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App */
