import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Task from './pages/Task';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;