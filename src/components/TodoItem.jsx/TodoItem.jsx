import CheckBox from 'components/CheckBox.jsx/CheckBox'
import DeleteIcon from 'components/DeleteIcon/DeleteIcon'
import React from 'react'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
      <button className='flex items-center' onClick={() => changeTodo(todo.id)}>
        {' '}
        <CheckBox isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? 'line-through' : ''}>
          {todo.title}
        </span>
      </button>
      <DeleteIcon removeTodo={removeTodo} todo={todo} />
    </div>
  )
}

export default TodoItem
