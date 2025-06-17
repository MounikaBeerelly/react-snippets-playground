import React, { useEffect, useState } from 'react';

const TodoComponent = () => {
    
    const  [newTodo, setNewTodo] = useState('');
    // initialize todos from local storage or an empty array
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // save todos to local storage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if(newTodo.trim() !== '') {
            setTodos([...todos, {
                        id: Date.now(),
                        text: newTodo, 
                        completed: false
                    }]);
            setNewTodo('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ?
                { ...todo, completed: !todo.completed} : todo
        ));
    };

  return (
    <>
    <div>
         <h1>Todo Component</h1>
      <input 
        type='text'
        placeholder='enter new todo'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
       />
       <button onClick={addTodo}>Add</button>
    </div>
    <ul>
        {todos.map(todo => (
            <li key = {todo.id}>
                <input 
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
                <span style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>
    </>
  );
}

export default TodoComponent;
