import React, { useEffect, useState } from 'react';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import { ITodoItem } from './types';

function App() {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([])

  useEffect(() => {
    getTodoItems()
  }, [])

  const getTodoItems = async () => {
    const todoItems: ITodoItem[] = await fetchTodoItems()
    setTodoItems(todoItems)
  }

  const fetchTodoItems = async () => {
    const res = await fetch('http://localhost:5000/todoItems')
    const data: ITodoItem[] = await res.json()
    return data;
  }

  const deleteItem = (id: number) => {
    const updatedItems = todoItems.filter(item => item.id !== id)
    setTodoItems(updatedItems)
  }

  const addItem = (label: string) => {
    const newItem: ITodoItem = {label, status: 'open', id: Math.floor(Math.random() * 9999)}
    setTodoItems([...todoItems, newItem])
  }

  return (
    <div className="App">
      <AddItem addItem={addItem}/>
      <TodoList todoItems={todoItems} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
