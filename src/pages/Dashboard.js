import React, { useState } from 'react';
import Home from './Home';
import Task from './Task';

const Dashboard = () => {
  const [habits, setHabits] = useState([]); // Shared state for habits

  return (
    <div>
      {/* Home Component */}
      <Home habits={habits} />

      {/* Task Component */}
      <Task onTasksUpdate={setHabits} />
    </div>
  );
};

export default Dashboard;
