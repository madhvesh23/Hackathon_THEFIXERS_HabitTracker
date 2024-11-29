import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      toast.success("Logged out successfully!", { position: "top-right" });
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error.message);
      toast.error("Failed to logout. Please try again.", { position: "top-right" });
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;