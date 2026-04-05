import React, { useState } from "react";
import AddNewUser from "./AddNewUser";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAdded, setUserAdded] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (!email.includes("@") && !email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    // Simulate successful login
    setIsLoggedIn(true);

   

   
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
          Are you a new user? <a href="#">Sign-Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
