import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


const Card = ({
  name,
  bio,
  image,
  role,
  github,
  twitter,
  linkedln,
  onDelete,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);


  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="card">
      <img src={image} alt="profile-image" className="cardImage" />
      <h2 className="card-name">{name}</h2>
      <p className="card-role">{role}</p>
      <p className="card-bio">{bio}</p>

      <div className="card-icons">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href={linkedln} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <button
        style={{
          backgroundColor: isFollowing ? "white" : "black",
          color: isFollowing ? "black" : "white",
          border: isFollowing ? "1px solid black" : "none",
        }}
        onClick={handleFollow}
        className={`card-button ${isFollowing ? "following" : ""}`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
      <button
        onClick={onDelete}
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          border: "none",
          background: "red",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
