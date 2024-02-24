// components/TodoList.js
import Task from './Task';
import styles from '../styles/TodoList.module.css';

const TodoList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className={styles.todoList}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TodoList;
