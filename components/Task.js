// components/Task.js
import { useState } from 'react';

const Task = ({ task, onDelete, onUpdate }) => {
  const [text, setText] = useState(task.text);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleUpdate = () => {
    onUpdate(task.id, text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
