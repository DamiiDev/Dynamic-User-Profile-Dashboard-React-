import React, { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({
  name,
  bio,
  image,
  role,
  github,
  twitter,
  linkedln,
  username,
  onDelete,
}) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleViewProfile = (e) => {
    e.stopPropagation();
    navigate(`/profile/${username}`);
  };

  const handleFollow = (e) => {
    e.stopPropagation();
    setIsFollowing((prev) => !prev);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="card">
      <img src={image} alt="profile-image" className="cardImage" />
      <h2 className="card-name">{name}</h2>
      <p className="card-role">{role}</p>
      <p className="card-bio">{bio}</p>

      <div className="card-icons">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <FaTwitter />
        </a>
        <a
          href={linkedln}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <FaLinkedin />
        </a>
      </div>

      <button onClick={handleViewProfile} className="view-profile">
        View Profile
      </button>

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
        onClick={handleDelete}
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
