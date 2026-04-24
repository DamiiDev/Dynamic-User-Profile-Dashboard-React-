import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const UserDashboard = ({ users, setUsers, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [visibleCard, setVisibleCard] = useState(6);
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    if (users.length === 0) {
      setFetchError("No users found");
    }
    setAllUsers(users);
  }, [users]);
      
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/LoginPage");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  //  Delete user
  const onDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setAllUsers((prev) => prev.filter((u) => u.id !== id));
  };
  //  Filter users
  const filteredUsers = allUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role?.toLowerCase().includes(search.toLowerCase()),
  );
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/LoginPage");
  };

  return (
    <div>
      <div className="container">
        <h1>User Dashboard</h1>
        <button onClick={handleLogout} className="logOut-btn">
          Log Out
        </button>

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />

        {/* 👥 Users */}
        <div className="grid">
          {isLoading ? (
            <p>Loading...</p>
          ) : fetchError ? (
            <p className="error-message">{fetchError}</p>
          ) : filteredUsers.length > 0 ? (
            filteredUsers.slice(0, visibleCard).map((user) => (
              <div
                key={user.id}
                onClick={() => navigate(`/profile/${user.username}`)}
                className="cursor-pointer"
              >
                <Card
                  name={user.name}
                  role={user.role}
                  bio={user.bio}
                  image={user.image}
                  github={user.github}
                  twitter={user.twitter}
                  username={user.username}
                  linkedin={user.linkedin}
                  onDelete={() => onDelete(user.id)}
                />
              </div>
            ))
          ) : (
            <p>No users found</p>
          )}
        </div>
        {visibleCard < filteredUsers.length && (
          <button
            onClick={() => setVisibleCard((prev) => prev + 6)}
            className="load-btn"
          >
            View More...
          </button>
        )}
        {visibleCard > 6 && (
          <button onClick={() => setVisibleCard(6)} className="load-btn">
            Show less...
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
