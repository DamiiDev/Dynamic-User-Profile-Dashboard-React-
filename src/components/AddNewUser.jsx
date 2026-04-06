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

  //  Add user
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
    };

    setUsers((prev) => [...prev, newUser]);

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
  };

  //  Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
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
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="addUserInput"
        />

        <input
          type="text"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="addUserInput"
        />
        <input
          type="text"
          placeholder="Twitter URL"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
          className="addUserInput"
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedln}
          onChange={(e) => setLinkedln(e.target.value)}
          className="addUserInput"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="addUserInput"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="addUserInput"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="addUserInput"
        />

        <textarea
          type="text"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="addUserInput"
        />

        <button type="submit" className="addUserBtn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;
