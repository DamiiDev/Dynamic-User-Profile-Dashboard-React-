import React, { useState, useEffect } from "react";
import LoginPage from "./LoginPage";
import AddNewUser from "./AddNewUser";
import Card from "./Card";
import image1 from "../assets/profil.jpeg";
import image2 from "../assets/dammie.jpeg";

const UserDashboard = ({ setIsLoggedIn }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers
      ? JSON.parse(savedUsers)
      : [
          {
            id: 1,
            name: "Damilare Festus",
            role: "Frontend Developer",
            bio: "I love building React Apps",
            image: image1,
            github: "https://github.com/DamiiDev",
            twitter: "https://twitter.com/DamiiDev",
            linkedln: "https://linkedln.com/in/damilare-festus",
          },
          {
            id: 2,
            name: "Michael Festus",
            role: "Backend Developer",
            bio: "Node.js and APIs",
            image: image2,
            github: "https://github.com/DamiiDev",
            twitter: "https://twitter.com/DamiiDev",
            linkedln: "https://linkedln.com/in/damilare-festus",
          },
        ];
  });

  const [search, setSearch] = useState("");
  const [visibleCard, setVisibleCard] = useState(6);

  //  Delete user
  const onDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  //  Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      console.error("Error saving users to localStorage:", error);
    }
  }, [users]);

  //  Filter users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="container">
        <h1>User Dashboard</h1>
        <button onClick={() => setIsLoggedIn(false)} className="logOut-btn">
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
                  key={user.id}
                  name={user.name}
                  role={user.role}
                  bio={user.bio}
                  image={user.image}
                  github={user.github}
                  twitter={user.twitter}
                  linkedln={user.linkedln}
                  onDelete={() => onDelete(user.id)}
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
