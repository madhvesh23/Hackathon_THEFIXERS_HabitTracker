import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import LoadingSpinner from "../components/LoadingSpinner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName: name,
        email: user.email,
        createdAt: new Date(),
      });

     

      // Delay spinner and navigate to login after 2 seconds
      setTimeout(() => {
        toast.success("Signup successful!", {
          position: "top-right",
          autoClose: 2000, // Show toast for 2 seconds
        });
        setLoading(false); // Stop spinner
        navigate("/login"); // Navigate to Login page
      }, 2000);
    } catch (error) {
      console.error("Error during signup:", error.message);
      toast.error(error.message, { position: "top-right" });
      setLoading(false); // Stop spinner immediately on error
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
                onChange={(e) => setName(e.target.value)}
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
          <div className="form-group">
            <label>
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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