import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { ITodoItem } from '../types'

const TodoList = ({todoItems, deleteItem}: any) => {
  return (
    todoItems.map(({id, label, status}: ITodoItem) => <TodoItem key={id} label={label} id={id} deleteItem={deleteItem}/>)
  )
}

export default TodoList