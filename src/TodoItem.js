import React, { useContext, useState } from 'react'
import { Context } from './context'

export default function TodoItem({ title, id, completed }) {
  const { removeTodo, toggleTodo } = useContext(Context)
  const [editing, setEditing] = useState(false)

  const line = ['todo']

  if (completed) {
    line.push('completed')
  }

  return (
    <li className={line.join(' ')}>
      <label>
        {id}
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>
        <i className="material-icons red-text" onClick={() => removeTodo(id)}>
          delete
        </i>
      </label>
    </li>
  )
}
