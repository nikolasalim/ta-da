import React from 'react'

const TodoItem = ({label, id, deleteItem}: any) => {
  return (
    <div>
      {label}
      <span onClick={() => deleteItem(id)}>x</span>
    </div>
  )
}

export default TodoItem