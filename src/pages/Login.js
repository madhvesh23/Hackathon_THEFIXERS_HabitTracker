import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path based on your file structure

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(error.message); // Display error message to the user
    }
  };

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
