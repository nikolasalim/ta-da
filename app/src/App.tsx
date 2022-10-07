import React, { useEffect, useState } from 'react';
import './App.css';
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

  return (
    <div className="App">
      <TodoList todoItems={todoItems}/>
    </div>
  );
}

export default App;
