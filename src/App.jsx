import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Card from "./components/Card";
import AddNewUser from "./components/AddNewUser";
import LoginPage from "./components/LoginPage";
import UserDashboard from "./components/UserDashboard";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      email: "damilarefestus12@gmail.com",
      username: "dami",
      password: "123456",
      role: "developer",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
    {
      id: 2,
      email: "engrdrey1@gmail.com",
      username: "john",
      password: "123456",
      role: "admin",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
    {
      id: 3,
      email: "engrdrey1@gmail.com",
      username: "mich",
      password: "123456",
      role: "developer",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
    {
      id: 4,
      email: "engrdrey1@gmail.com",
      username: "festus",
      password: "123456",
      role: "admin",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
    {
      id: 5,
      email: "engrdrey1@gmail.com",
      username: "timi",
      password: "123456",
      role: "developer",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
    {
      id: 6,
      email: "engrdrey1@gmail.com",
      username: "esther",
      password: "123456",
      role: "admin",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
    {
      id: 7,
      email: "engrdrey1@gmail.com",
      username: "bolaji",
      password: "123456",
      role: "developer",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
    {
      id: 8,
      email: "engrdrey1@gmail.com",
      username: "john",
      password: "123456",
      role: "admin",
      name: "Dami Festus",
      bio: "Full-stack developer who loves building things.",
      image: "https://i.pravatar.cc/150?u=dami",
      github: "https://github.com/dami",
      twitter: null,
      linkedin: "https://linkedin.com/in/dami",
      stats: {
        followers: 1400,
        following: 312,
        projects: 28,
        posts: 94,
      },
      skills: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      projects: [
        {
          name: "devquery",
          description: "A lightweight CLI tool...",
          tags: ["TypeScript", "Node.js"],
          stars: 342,
          visibility: "Public",
        },
      ],
      activity: [
        {
          meta: "Shared a post",
          content: "Just shipped v2 of devquery...",
          time: "2 hours ago · 14 likes",
        },
      ],
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/LoginPage"
        element={<LoginPage setIsLoggedIn={setIsLoggedIn} users={users} />}
      />

      <Route
        path="/AddNewUser"
        element={<AddNewUser setUserAdded={setUsers} setIsLoggedIn={setIsLoggedIn} />}
      />

      <Route path="/profile/:username" element={<Profile users={users} />} />

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
  );
};

export default App;
