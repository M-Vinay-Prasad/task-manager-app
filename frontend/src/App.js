import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    await axios.post(API, { title });
    fetchTasks();
  };

  const toggleTask = async (id, completed) => {
    await axios.put(`${API}/${id}`, { completed: !completed });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const editTask = async (id, title) => {
    await axios.put(`${API}/${id}`, { title });
    fetchTasks();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 16px' }}>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;