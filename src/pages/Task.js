import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Task.css';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Task({ onTasksUpdate }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: taskInput,
        completed: false, // Simplified for Home.js
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      onTasksUpdate(updatedTasks); // Sync with Dashboard.js
      setTaskInput('');
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    onTasksUpdate(updatedTasks); // Sync with Dashboard.js
  };

  return (
    <div className="task-container">
      <h1 className="task-title">Habit Tracker</h1>
      <div className="task-input">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a new habit"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks added yet!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <h3>{task.name}</h3>
              <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Task;
