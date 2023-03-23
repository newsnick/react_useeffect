import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todos}) {

  return (
      <ul>
        {todos.map((item) => (
            <TodoItem {...item} key={item.id}/>
        ))}
      </ul>
  )
}