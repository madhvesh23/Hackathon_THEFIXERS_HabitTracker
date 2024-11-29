import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Task() {
  // Step 1: State to store tasks (with completion for each of the 7 days)
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Step 2: Handle input change for task name
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Step 3: Add a new task with 7 days of completion tracking
  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: taskInput,
          completed: Array(7).fill(false), // Initialize 7 days with false (not completed)
        },
      ]);
      setTaskInput(""); // Clear input field after adding task
    }
  };

  // Step 4: Handle deleting a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Step 5: Handle task completion for each day (toggle checkbox)
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

  // Step 6: Prepare the chart data (display completion status for each task over 7 days)
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

  // Chart options (simplified)
  const chartOptions = {
    scales: {
      y: { beginAtZero: true },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Habit Tracker</h1>

      {/* Input for new task */}
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a new habit"
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleAddTask} style={{ padding: "10px", cursor: "pointer" }}>Add Task</button>

      {/* Bar chart to visualize task completions over 7 days */}
      <div style={{ width: '80%', height: '300px', marginTop: '20px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Display tasks */}
      <div style={{ marginTop: "20px" }}>
        {tasks.length === 0 ? (
          <p>No tasks added yet!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <h3>{task.name}</h3>
              <div style={{ marginLeft: '20px' }}>
                {task.completed.map((completed, dayIndex) => (
                  <label key={dayIndex}>
                    <input
                      type="checkbox"
                      checked={completed}
                      onChange={() => handleToggleComplete(task.id, dayIndex)}
                      style={{ marginRight: "10px" }}
                    />
                    Day {dayIndex + 1}
                  </label>
                ))}
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  marginLeft: '10px',
                }}
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
