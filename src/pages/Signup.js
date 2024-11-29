import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Ensure the correct imports
import { doc, setDoc } from "firebase/firestore"; // Firestore functions
import LoadingSpinner from "../components/LoadingSpinner"; // Import spinner component

const Signup = () => {
  const [name, setName] = useState(""); // Full name state
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm Password state
  const [loading, setLoading] = useState(false); // Loading state

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true); // Start loading spinner
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: name,
        email: user.email,
        createdAt: new Date(),
      });

      alert("Signup successful!");
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(error.message);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Habit Tracker</h1>
        <p className="tagline">Start building better habits today!</p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
                required
              />
            </label>
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? <LoadingSpinner /> : "Sign Up"}
          </button>
        </form>
        <p className="alt-action">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;