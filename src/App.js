import React, { useEffect, useState } from 'react'
import './assets/styles/App.css'
import Counter from './components/Counter/Counter'
import MountMessage from './components/MountMessage/MountMessage'
import UpdateTitle from './components/UpdateTitle/UpdateTitle'
import CurrentTime from './components/CurrentTime/CurrentTime'
import FetchImage from './components/FetchImage/FetchImage'
import ToggleBackground from './components/ToogleBackground/ToggleBackground'
import RandomNumber from './components/RandomNumber/RandomNumber'
import DateTime from './components/DateTime/DateTime'
import FetchPost from './components/FetchPost/FetchPost'
import DateTitle from './components/DateTitle/DateTitle'
import AddRemoveEvent from './components/AddRemoveEvent/AddRemoveEvent'
import SetFetchData from './components/SetFetchData/SetFetchData'
import FetchCat from './components/FetchCat/FetchCat'
import FetchApi from './components/FetchApi/FetchApi'

function App() {
  return (
    <div className="container">
      <h5>1. level</h5>
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
        3. Create a component that fetches data from an API and logs it to the
        console using useEffect. <FetchApi />
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
      <div></div>
      <mark>
        7. Create a component that uses useEffect to fetch and display a random
        image from an API every time the component mounts.
        <FetchImage />
      </mark>
      <mark>
        8. Create a component that uses useEffect to toggle the background color
        of the page when a button is clicked.
        <ToggleBackground />
      </mark>
      <mark>
        9. Create a component that uses useEffect to display a random number
        between 1 and 100 every time the component mounts.
        <RandomNumber />
      </mark>
      <mark>
        10. Create a component that uses useEffect to display the current date
        and time on the screen.
        <DateTime />
      </mark>
      <hr className="hr" />

      <h5>2. level</h5>
      <mark className="marksm">
        1. Create a component that fetches data from an API using useEffect and
        displays the results in a list.
        <FetchPost />
      </mark>
      <mark className="marksm">
        2. Create a component that updates the document title based on the
        current date using useEffect.
        <DateTitle />
      </mark>
      <mark className="marksm">
        3. Create a component that uses useEffect to add and remove event
        listeners for keydown and keyup events.
        <AddRemoveEvent />
      </mark>
      <mark className="marksm">
        4. Create a component that fetches data from an API every 5 seconds
        using setInterval and useEffect.
        <SetFetchData />
      </mark>
      <mark className="marksm">
        7. Create a component that uses useEffect to display the current weather
        for a given location using an API.
      </mark>
      <mark className="marksm">
        8. Create a component that uses useEffect to display a random cat image
        every time the component mounts.
        <FetchCat />
      </mark>
    </div>
  )
}

export default App

/* import { useEffect, useState } from 'react'
import TodoList from './TodoList'
import { Context } from './context'

function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    const list = localStorage.getItem('todos')
    setTodos(JSON.parse(list))
  }, [])

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

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
      setTodoTitle('')
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Context.Provider
      value={{
        removeTodo,
        toggleTodo,
      }}
    >
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
        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  )
}

export default App
 */
