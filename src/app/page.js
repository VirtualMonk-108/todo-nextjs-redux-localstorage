'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo, setTodos } from '../../store';

export default function Home() {
  const [input, setInput] = useState('');
  const [isClient, setIsClient] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
    const savedTodos = localStorage.getItem('state');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      dispatch(setTodos(parsedTodos));
    }
  }, [dispatch]);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  const handleUpdateTodo = (index, value) => {
    dispatch(updateTodo({
      index,
      value
    }));
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 text-black"
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo} className="ml-2 p-2 bg-blue-500 text-white">
          Add Todo
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mt-2">
            {todo}
            <div>
              <button onClick={() => handleRemoveTodo(index)} className="ml-2 p-2 bg-red-500 text-white">
                Remove
              </button>
              <button onClick={() => handleUpdateTodo(index, prompt('Update todo:', todo))} className="ml-2 p-2 bg-green-500 text-white">
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
