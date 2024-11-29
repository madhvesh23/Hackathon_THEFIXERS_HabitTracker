import React from 'react';
import './Home.css';

const Home = ({ habits }) => {
  // Calculate progress
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.completed).length;
  const progress = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Habit Tracker!</h1>
        <p>Track your habits, achieve your dreams!</p>
      </div>

      <div className="dashboard">
        {/* Weekly Progress */}
        <div className="habit-progress">
          <h2>Weekly Progress</h2>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            >
              {Math.round(progress)}% Completed
            </div>
          </div>
        </div>

        {/* Habit Checklist */}
        <div className="habit-checklist">
          <h2>Today's Habits</h2>
          <ul className="habit-list">
            {habits.map((habit) => (
              <li key={habit.id}>
                <input
                  type="checkbox"
                  checked={habit.completed}
                  readOnly
                />
                {habit.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;