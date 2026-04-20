import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import api from "./api";

const UserDashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [visibleCard, setVisibleCard] = useState(6);
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
        navigate("/LoginPage");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        setAllUsers(res.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };
    fetchUsers();
  }, []);

  //  Delete user
  const onDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setAllUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  //  Filter users
  const filteredUsers = allUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role?.toLowerCase().includes(search.toLowerCase()) ||
      "",
  );
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
          {filteredUsers.length > 0 ? (
            filteredUsers
              .slice(0, visibleCard)
              .map((user) => (
                <Card
                  key={user._id}
                  name={user.name}
                  role={user.role}
                  bio={user.bio}
                  image={user.image}
                  github={user.github}
                  twitter={user.twitter}
                  linkedln={user.linkedln}
                  onDelete={() => onDelete(user._id)}
                />
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
