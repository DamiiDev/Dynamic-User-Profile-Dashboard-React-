import React, { useState } from "react";
import Card from "./components/Card";
import image1 from "./assets/profil.jpeg";
import image2 from "./assets/dammie.jpeg";

const App = () => {

  // Initialize users state with data from localStorage or default users
   const [users, setUsers] = useState(() => {
     const savedUsers = localStorage.getItem("users");
     return savedUsers
       ? JSON.parse(savedUsers)
       : [
           {
             id: 1,
             name: "Damilare Festus",
             role: "Frontend Developer",
             bio: "I love building React App",
             image: image1,
             github: "https://github.com/DamiiDev",
             twitter: "https://twitter.com/DamiiDev",
             linkedln: "https://linkedin.com/in/damilare-festus",
           },
           {
             id: 2,
             name: "Michael Festus",
             role: "Backend Developer",
             bio: "Node.js and APIs",
             image: image2,
             github: "https://github.com/DamiiDev",
             twitter: "https://twitter.com/DamiiDev",
             linkedln: "https://linkedin.com/in/damilare-festus",
           },
           {
             id: 3,
             name: "John Doe",
             role: "Full Stack Developer",
             bio: "Passionate about coding and technology.",
             image: image1,
             github: "https://github.com/DamiiDev",
             twitter: "https://twitter.com/DamiiDev",
             linkedln: "https://linkedin.com/in/damilare-festus",
           },
         ];
   });
  
  // State for new user name and search query
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");


  // Function to add a new user
  const addUser = () => {
    if (name.trim() === "") return;

    const newUser = {
      id: Date.now(),
      name: name,
      role: "New User",
      bio: "This is a new user.",
      image: image1,
      github: "#",
      twitter: "#",
      linkedln: "#",
    };
    setUsers([...users, newUser]);
    setName("");
  };

// Function to delete a user
   const onDelete = (id) => {
     setUsers(users.filter((user) => user.id !== id));
   };
 
 
// Save users to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Fetch users from API on component mount
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const fetchedUsers = data.map((user) => ({
          id: user.id + 1000, // To avoid ID conflicts with existing users
          name: user.name,
          role: "User",
          bio: "This is a user from API.",
          image: image1,
          github: "#",
          twitter: "#",
          linkedln: "#",
        }));
        setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  
 
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "200px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            marginRight: "10px",
          }}
        />

        <button
          onClick={addUser}
          style={{
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLocaleLowerCase()),
          )
          .map((user) => (
            <Card
              key={user.id}
              name={user.name}
              role={user.role}
              bio={user.bio}
              image={user.image}
              twitter={user.twitter}
              linkedln={user.linkedln}
              github={user.github}
              onDelete={() => onDelete(user.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
