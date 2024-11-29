import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const getMotivationalQuote = () => {
    const quotes = [
      "Success is the sum of small efforts, repeated day in and day out.",
      "What you do today can improve all your tomorrows.",
      "The secret of getting ahead is getting started.",
      "Your future is created by what you do today, not tomorrow.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  // Example habits data
  const [habits, setHabits] = useState([
    { id: 1, name: 'Drink Water', completed: true },
    { id: 2, name: 'Exercise', completed: false },
    { id: 3, name: 'Read a Book', completed: true },
    { id: 4, name: 'Meditate', completed: true },
    { id: 5, name: 'Journal', completed: false },
  ]);

  // Calculate progress
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.completed).length;
  const progress = (completedHabits / totalHabits) * 100;

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Habit Tracker!</h1>
        <p>Track your habits, achieve your dreams!</p>
      </div>

      <div className="dashboard">
        {/* Motivational Quote */}
        <div className="quote">
          <h2>Motivational Quote of the Day:</h2>
          <p>"{getMotivationalQuote()}"</p>
        </div>

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

        {/* (completedHabits / totalHabits) * 100 */}

        <div className="habit-checklist">
          <h2>Today's Habits</h2>
          <ul className="habit-list">
            {habits.map((habit) => (
              <li key={habit.id}>
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => {
                    setHabits((prevHabits) =>
                      prevHabits.map((h) =>
                        h.id === habit.id
                          ? { ...h, completed: !h.completed }
                          : h
                      )
                    );
                  }}
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
