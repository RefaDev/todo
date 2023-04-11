import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const CreateTodoField = ({ addTodo }) => {
  const [title, setTitle] = useState('')
  const addTodoItem = () => {
    addTodo(title)
    setTitle('')
  }
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full'>
      <input
        className='bg-transparent w-full border-none outline-none'
        type='text'
        placeholder='Add a task'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={(e) => e.key === 'Enter' && addTodoItem()}
      />
      <AiOutlinePlusCircle
        size={24}
        onClick={() => title && addTodoItem()}
        className='text-gray-500 hover:text-pink-400 transition-colors ease-in-out duration-300'
      />
    </div>
  )
}

export default CreateTodoField
