import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import AddNewUser from "./components/AddNewUser";
import LoginPage from "./components/LoginPage";
import image1 from "./assets/profil.jpeg";
import image2 from "./assets/dammie.jpeg";

const App = () => {
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

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("");
  const [visibleCard, setVisibleCard] = useState(6);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  // //  Add user
  // const addUser = () => {
  //   if (!name.trim() || !role.trim() || !bio.trim()) return;

  //   const newUser = {
  //     id: Date.now(),
  //     name,
  //     role,
  //     bio,
  //     image: image,
  //     github: "#",
  //     twitter: "#",
  //     linkedln: "#",
  //   };

  //   setUsers((prev) => [...prev, newUser]);

  //   setName("");
  //   setRole("");
  //   setBio("");
  //   setImage("");
  // };

  // //  Handle image upload
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  //  Delete user
  const onDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  //  Save to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //  Fetch only if no local data
  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) return;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const fetchedUsers = data.map((user) => ({
          id: user.id + 1000,
          name: user.name,
          role: user.role,
          bio: "Fetched from API",
          image: image1,
          github: "#",
          twitter: "#",
          linkedln: "#",
        }));

        setUsers(fetchedUsers);
      })
      .catch((err) => console.error(err));
  }, []);

  //  Filter users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase()),
  );

  if (!isLoggedIn) {
    return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
  }

  if (isLoggedIn && !userAdded) {
    return <AddNewUser setUserAdded={setUserAdded} />;
  }

 

  return (
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
      {/* ➕ Add User */}
      {/* <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="input"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="input"
          key={image}
        />
        <button onClick={addUser} className="add-btn">
          Add User
        </button>
      </div> */}
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
  );
};

export default App;
