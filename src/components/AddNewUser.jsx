import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

const AddNewUser = ({ setUserAdded }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedln, setLinkedln] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

<<<<<<< HEAD
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  //  Add user
  const addUser = async (e) => {
=======
  // Add user
  const addUser = (e) => {
>>>>>>> 91a1ba86e9115d645463009f36dea7222250e0d5
    e.preventDefault();

    if (
      !name.trim() ||
      !role.trim() ||
      !bio.trim() ||
      !github.trim() ||
      !twitter.trim() ||
      !linkedln.trim() ||
      !password.trim() ||
      !email.trim()
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

<<<<<<< HEAD
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }
=======
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
>>>>>>> 91a1ba86e9115d645463009f36dea7222250e0d5

    setIsLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        role,
        bio,
        image,
        github,
        twitter,
        linkedln,
      });

<<<<<<< HEAD
      console.log("User registered:", res.data);

      setName("");
      setRole("");
      setBio("");
      setEmail("");
      setImage("");
      setGithub("");
      setTwitter("");
      setLinkedln("");
      setPassword("");
      setConfirmPassword("");

      setUserAdded(true);

      navigate("/LoginPage");
    } catch (error) {
      console.log("Full error:", error);
      console.log("Response:", error?.response);
      console.log("Response data: ", error?.response?.data);
      console.log("Status:", error?.response?.status);
      console.log("Message:", error?.message);
      alert(
        error?.response?.data?.message ||
          "Failed to register user. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };
=======
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
>>>>>>> 91a1ba86e9115d645463009f36dea7222250e0d5

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
<<<<<<< HEAD
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="addUserInput"
        />

        <input
          type="text"
          placeholder="GitHub URL"
=======
          type="url"           placeholder="GitHub URL"
>>>>>>> 91a1ba86e9115d645463009f36dea7222250e0d5
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

<<<<<<< HEAD
        <button type="submit" disabled={isLoading} className="addUserBtn">
          {isLoading ? "Creating Account..." : "Create Account"}
=======
        <button type="submit" className="addUserBtn">
          Create Account
>>>>>>> 91a1ba86e9115d645463009f36dea7222250e0d5
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;