// components/TodoList.js
import Task from './Task';

const TodoList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TodoList;
