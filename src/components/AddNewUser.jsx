import React from "react";

const AddNewUser = ({ setUserAdded }) => {
  //  Add user
  const addUser = () => {
    if (!name.trim() || !role.trim() || !bio.trim()) return;

    const newUser = {
      id: Date.now(),
      name,
      role,
      bio,
      image: image,
      github: "#",
      twitter: "#",
      linkedln: "#",
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

    setUsers((prev) => [...prev, newUser]);

    setName("");
    setRole("");
    setBio("");
    setImage("");

    setUserAdded(true);

    
  };

  return (
    <div className="form">
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
    </div>
  );
};

export default AddNewUser;
