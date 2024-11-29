import React from 'react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Habit Tracker</h1>
        <p className="tagline">Track your habits, achieve your goals!</p>
        <form>
          <div className="form-group">
            <label>
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Password" />
            </label>
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="alt-action">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
