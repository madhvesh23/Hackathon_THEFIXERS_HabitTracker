import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import LoadingSpinner from "../components/LoadingSpinner";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000, // Show toast for 2 seconds
      });
      // Delay navigation and hide spinner after 2 seconds
      setTimeout(() => {
        
        setLoading(false); // Stop spinner after delay
        navigate("/"); // Navigate to Home page
      }, 2000);
    } catch (error) {
      console.error("Error during login:", error.message);
      toast.error(error.message, { position: "top-right" });
      setLoading(false); // Stop spinner immediately on error
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Habit Tracker</h1>
        <p className="tagline">Track your habits, achieve your goals!</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? <LoadingSpinner /> : "Login"}
          </button>
        </form>
        <p className="alt-action">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;