import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'

const DeleteIcon = ({ todo, removeTodo }) => {
  return (
    <button onClick={() => removeTodo(todo.id)}>
      <MdDeleteOutline
        size={24}
        className='text-gray-500 hover:text-red-400 transition-colors ease-in-out duration-300'
      />
    </button>
  )
}

export default DeleteIcon
