import CreateTodoField from 'components/CreateTodoField/CreateTodoField'
import TodoItem from 'components/TodoItem.jsx/TodoItem'
import React, { useState } from 'react'

const data = [
  {
    id: 1,
    title: 'Посетить эту страничку',
    isCompleted: true,
  },
]

const Todo = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todo')
	? JSON.parse(localStorage.getItem('todo'))
	: data)

  const addToLocalStorage = (item) => {
    setTodos(item)
    localStorage.setItem('todo', JSON.stringify(item))
  }

  const changeTodo = (id) => {
    addToLocalStorage(
			todos.map((todo) => {
				if (todo.id === id) {
					 todo.isCompleted = !todo.isCompleted
				}
				return todo
		 })
		)
  }

  const removeTodo = (id) => {
    addToLocalStorage([...todos].filter((t) => t.id !== id))
  }

  const addTodo = (title) => {
    addToLocalStorage([
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...todos,
    ])
  }

  return (
    <div className='text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-7'>Todo List</h1>
      <CreateTodoField addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}

export default Todo
