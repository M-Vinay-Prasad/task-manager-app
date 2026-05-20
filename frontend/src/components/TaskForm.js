import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        style={{ flex: 1, padding: '8px 12px', fontSize: '14px' }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;