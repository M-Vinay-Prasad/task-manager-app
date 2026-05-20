import { useState } from 'react';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const startEdit = (task) => {
    setEditId(task._id);
    setEditText(task.title);
  };

  const saveEdit = (id) => {
    onEdit(id, editText);
    setEditId(null);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li key={task._id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 0', borderBottom: '1px solid #eee' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task._id, task.completed)}
          />
          {editId === task._id ? (
            <>
              <input value={editText} onChange={(e) => setEditText(e.target.value)} style={{ flex: 1 }} />
              <button onClick={() => saveEdit(task._id)}>Save</button>
            </>
          ) : (
            <>
              <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </span>
              <button onClick={() => startEdit(task)}>Edit</button>
              <button onClick={() => onDelete(task._id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;