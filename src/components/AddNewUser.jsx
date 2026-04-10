import React, { useState } from "react";

const AddNewUser = ({ setUsers, setUserAdded, setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedln, setLinkedln] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Add user
  const addUser = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !role.trim() ||
      !bio.trim() ||
      !github.trim() ||
      !twitter.trim() ||
      !linkedln.trim() ||
      !password.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!image) {
      alert("Please upload a profile image");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      role,
      bio,
      image,
      github,
      twitter,
      linkedln,
      password,     };

    setUsers((prev) => [...prev, newUser]);

    // Clear form
    setName("");
    setRole("");
    setBio("");
    setImage("");
    setGithub("");
    setTwitter("");
    setLinkedln("");
    setPassword("");
    setConfirmPassword("");

    setUserAdded(true);
    setIsLoggedIn(true);   };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // ADDED: File size validation (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size must be less than 2MB");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.onerror = () => { // ADDED: Error handling
        alert("Error reading file");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={addUser} className="formContent">
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="addUserInput"
          required         />
        <input
          type="text"
          placeholder="Role (e.g. Frontend Developer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="addUserInput"
          required         />

        <input
          type="url"           placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="addUserInput"
          required        />
        <input
          type="url" 
          placeholder="Twitter URL"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
          className="addUserInput"
          required         />
        <input
          type="url"           placeholder="LinkedIn URL"
          value={linkedln}
          onChange={(e) => setLinkedln(e.target.value)}
          className="addUserInput"
          required 
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="addUserInput"
          minLength="6"           required 
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="addUserInput"
          required 
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="addUserInput"
          required 
        />

        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="addUserInput"
          rows="4" 
          required 
        />

        <button type="submit" className="addUserBtn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;