import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn, users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      setError("Invalid email or password");
      setIsLoading(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    setEmail("");
    setPassword("");
    setIsLoading(false);
    navigate("/UserDashboard");
  };

  const handleForgotPassword = () => {
    alert("Feature coming soon...");
  };

  const handleSignup = () => {
    navigate("/AddNewUser");
  };

  return (
    <div className="cardForm">
      <form className="loginForm" onSubmit={submit}>
        <h2 className="header">Login</h2>
        {error && (
          <p className="text-red-500 text-sm mt-2 p-2">
            {error}
          </p>
        )}
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
        <button
          type="button"
          onClick={handleForgotPassword}
          className="forgot-btn"
        >
          Forgot password?
        </button>
        <button type="submit" className="loginButton" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
        <p>
          Are you a new user?
          <button type="button" onClick={handleSignup} className="sign-up">
            Sign-Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
