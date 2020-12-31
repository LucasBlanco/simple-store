import React, { useEffect } from 'react'
import { useTodos } from './TodoService'

const Child = () => {
  const { todos, toggleTodo } = useTodos()

  useEffect(() => {
    console.log('child', todos)
  }, [todos])
  return (
    <div
      style={{
        width: 300,
        padding: 30,
        borderRadius: 10,
        boxShadow: '0 0 10px grey'
      }}
    >
      <h3>I'm a Child component</h3>
      <h5>We share the same store</h5>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type='checkbox'
            checked={todo.checked}
            onChange={() => toggleTodo(todo)}
          />
          <span>{todo.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Child
