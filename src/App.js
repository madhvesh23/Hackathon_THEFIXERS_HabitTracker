<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"; // Import Navigate
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase"; // Firebase instance
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./components/Logout"; // Import Logout component
import "./App.css";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Task from './pages/Task';
import './App.css';
>>>>>>> origin/feat-charts

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const [loading, setLoading] = useState(true); // Loading state during auth check

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Set true if user exists, otherwise false
      setLoading(false); // Stop loading once auth check is complete
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading...</div>; // Display while checking authentication
  }

  return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        {isAuthenticated && ( // Show header only when authenticated
          <header className="App-header">
            <nav>
              <Link to="/" className="App-link">Home</Link> |{" "}
              <Logout /> {/* Use Logout component */}
            </nav>
          </header>
        )}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? <Home /> : <Navigate to="/login" /> // Redirect to Login if not authenticated
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/" /> : <Login /> // Redirect to Home if authenticated
              }
            />
            <Route
              path="/signup"
              element={
                isAuthenticated ? <Navigate to="/" /> : <Signup /> // Redirect to Home if authenticated
              }
            />
=======
        <header className="App-header">
          <nav>
            <Link to="/" className="App-link">Home</Link> |{' '}
            <Link to="/login" className="App-link">Login</Link> |{' '}
            <Link to="/signup" className="App-link">Signup</Link>
            <Link to="/new-task" className="App-link">New task</Link>
          </nav>
        </header>

      {/* we are checking for commit  */}


        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/new-task" element={<Task />} />
>>>>>>> origin/feat-charts
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;