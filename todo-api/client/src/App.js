import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  const addTask = () => {
    axios.post('http://localhost:5000/api/tasks', { title })
      .then(res => setTasks([...tasks, res.data]))
      .catch(err => console.log(err));
  };

  return (
  <div className="container">
    <h1>📝 My Task Manager</h1>

    <div className="task-input">
      <input
        placeholder="New task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>

    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  </div>
);
}
export default App;