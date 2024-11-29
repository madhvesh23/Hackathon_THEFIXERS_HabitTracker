import React from 'react';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Habit Tracker</h1>
        <p className="tagline">Start building better habits today!</p>
        <form>
          <div className="form-group">
            <label>
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Name" />
            </label>
          </div>
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
          <div className="form-group">
            <label>
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </label>
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="alt-action">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
