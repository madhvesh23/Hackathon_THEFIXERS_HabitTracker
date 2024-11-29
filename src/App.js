import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./components/Logout"; // Import Logout component
import "./App.css";
import Dashboard from './pages/Dashboard';



function App() {
  return <Dashboard />;
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
        {isAuthenticated && ( // Show header only when authenticated
          <header className="App-header">
            <nav>
              <Link to="/" className="App-link">Home</Link> |{" "}
              <Link to="/task" className="App-link">Task</Link> |{" "}
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
              path="/task"
              element={
                isAuthenticated ? <Task /> : <Navigate to="/login" /> // Redirect to Login if not authenticated
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
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;