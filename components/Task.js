// components/Task.js
import { useState } from 'react';
import styles from '../styles/Task.module.css';

const Task = ({ task, onDelete, onUpdate }) => {
  const [text, setText] = useState(task.text);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    onUpdate(task.id, text);
  };

  return (
    <div className={styles.task}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textInput}
      />
      <button onClick={handleUpdate} className={styles.update}>
        Update
      </button>
      <button onClick={handleDelete} className={styles.delete}>
        Delete
      </button>
    </div>
  );
};

export default Task;
