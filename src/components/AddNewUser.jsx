import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewUser = ({ setUserAdded, setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Add user
  const addUser = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !name.trim() ||
      !role.trim() ||
      !bio.trim() ||
      !github.trim() ||
      !twitter.trim() ||
      !linkedin.trim() ||
      !username.trim() ||
      !password.trim() ||
      !email.trim()
    ) {
      setError("Please fill required fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!image) {
      setError("Please upload a profile image");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      const newUser = {
        name,
        email,
        password,
        role,
        bio,
        image,
        github,
        twitter,
        linkedin,
        username,
      };

      setUserAdded((prev) => [...prev, { ...newUser, id: prev.length + 1}]);

      // Clear form
      setName("");
      setRole("");
      setBio("");
      setImage("");
      setGithub("");
      setTwitter("");
      setLinkedIn("");
      setUsername("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");

      setIsLoggedIn(true);
      navigate("/UserDashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // ADDED: File size validation (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError("Image size must be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.onerror = () => setError("Error reading file");
    reader.readAsDataURL(file);
  };

  return (
    <div className="formContainer">
      <form onSubmit={addUser} className="formContent">
        <h1>Create Account</h1>

        {error && <p className="error-message">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="addUserInput"
          required
        />
        <input
          type="text"
          placeholder="Role (e.g. Frontend Developer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="addUserInput"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="addUserInput"
          required
        />

        <input
          type="url"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="addUserInput"
          required
        />
        <input
          type="url"
          placeholder="Twitter URL"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
          className="addUserInput"
          required
        />
        <input
          type="url"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedIn(e.target.value)}
          className="addUserInput"
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="addUserInput"
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="addUserInput"
          minLength="6"
          required
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

        <button type="submit" className="addUserBtn" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;
