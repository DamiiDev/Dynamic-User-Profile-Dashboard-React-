import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Card from "./components/Card";
import AddNewUser from "./components/AddNewUser";
import LoginPage from "./components/LoginPage";
import UserDashboard from "./components/UserDashboard";
import LandingPage from "./components/LandingPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAdded, setUserAdded] = useState(false);

  //  Load users from localStorage on component mount

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/LoginPage"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} users={users} />}
        />
        <Route
          path="/AddNewUser"
          element={
            <AddNewUser setUserAdded={setUserAdded} setUsers={setUsers} />
          }
        />
        <Route
          path="/UserDashboard"
          element={
            <ProtectedRoute>
              <UserDashboard
                users={users}
                setUsers={setUsers}
                setIsLoggedIn={setIsLoggedIn}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
