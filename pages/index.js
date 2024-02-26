import { useState } from 'react';
import TodoList from '../components/TodoList';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTaskText }]);
      setNewTaskText('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add new task"
          className={styles.input}
        />
        <button onClick={addTask} className={styles.addButton}>
          Add
        </button>
      </div>
      <TodoList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
};

export default Home;
