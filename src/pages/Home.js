import React from 'react';
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

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Habit Tracker!</h1>
        <p>Track your habits, achieve your dreams!</p>
      </div>
      
      <div className="dashboard">
        <div className="quote">
          <h2>Motivational Quote of the Day:</h2>
          <p>"{getMotivationalQuote()}"</p>
        </div>

        <div className="habit-progress">
          <h2>Weekly's Progress</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}>70% Completed</div>
          </div>
        </div>
        
        <div className="habit-calendar">
          <h2>Habit Calendar</h2>
          <p>View your tracked habits here!</p>
          <div className="calendar-placeholder">[Interactive Calendar]</div>
        </div>

        <div className="rewards">
          <h2>Gamification</h2>
          <p>Earned Badges: 🌟🌟🌟</p>
        </div>
      </div>
    </div>
  );
};

export default Home;