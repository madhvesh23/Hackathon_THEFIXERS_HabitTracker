import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Task.css';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Task() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: taskInput,
          completed: Array(7).fill(false),
        },
      ]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (taskId, dayIndex) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: task.completed.map((completed, index) =>
                index === dayIndex ? !completed : completed
              ),
            }
          : task
      )
    );
  };

  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: tasks.map((task) => ({
      label: task.name,
      data: task.completed.map((completed) => (completed ? 1 : 0)),
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    })),
  };

  const chartOptions = {
    scales: {
      y: { beginAtZero: true },
    },
    responsive: true,
    maintainAspectRatio: false,
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

      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks added yet!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <h3>{task.name}</h3>
              <div className="task-completion">
                {task.completed.map((completed, dayIndex) => (
                  <label key={dayIndex}>
                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => handleToggleComplete(task.id, dayIndex)}
                    />
                    Day {dayIndex + 1}
                  </label>
                ))}
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(task.id)}
              >
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
