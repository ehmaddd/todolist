// pages/index.js
import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load todos from local storage on mount
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever the todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };


};

export default Home;
