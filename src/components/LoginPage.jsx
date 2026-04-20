import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

const LoginPage = ({ setIsLoggedIn, users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

      if (!email.trim() || !password.trim()) {
        alert("Please fill in all fields");
        return;
      }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

  
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // Store token and user data in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Simulate successful login
      setIsLoggedIn(true);

      // Clear form fields
      setEmail("");
      setPassword("");


      // Navigate to user dashboard
      Navigate("/UserDashboard");
    } catch (error) {
      console.log("Full error:", error);
      console.log("Response data:", error.response?.data);
      console.log("Status:", error.response?.status);
      alert("invalid email or password");
    }
  };

  const handleSignup = () => {
    Navigate("/AddNewUser");
  };

  return (
    <div className="cardForm">
      <form className="loginForm" onSubmit={submit}>
        <h2 className="header">Login In</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter Email..."
          className="loginInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password..."
          className="loginInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#">Forgot password?</a>
        <button type="submit" className="loginButton">
          Login
        </button>
        <p>
          Are you a new user?{" "}
          <button type="button" onClick={handleSignup} className="sign-up">
            Sign-Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
