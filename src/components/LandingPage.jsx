import React from "react";
import {
  FaConnectdevelop,
  FaSearch,
  FaIdBadge,
  FaUserFriends,
  FaUser,
  FaCode,
} from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

const LandingPage = ({ setShowLogin }) => {
  return (
    <div className="landingPage">
      {/* <!-- Header Section --> */}

      <header className="logo-header">
        <div className="logo">
          <h3 className="logo1">Dev</h3>
          <h3 className="logo2">Trybe</h3>
        </div>

        <div className="signup-login">
          <button onClick={() => setShowLogin(true)} className="login">
            Login
          </button>
          <button onClick={() => setUserAdded(true)} className="sign-up">
            Sign Up
          </button>
        </div>
      </header>

      {/* <!-- Body Content Section --> */}

      <section className="body-content">
        <div className="content">
          <h1 className="page-title">Where Developers Connect and Grow</h1>
          <div className="hr-title"></div>
          <p className="para">
            Build meaningful connections with developers from different
            backgrounds, engage with their work, and stay updated by following
            their social media profiles. By interacting, sharing ideas, and
            collaborating, you can expand your professional network, discover
            new opportunities, and grow within the tech community.
          </p>
          <button className="get-started">Get Started</button>
          <button className="learn-more">Learn More</button>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section>
        <div className="why">
          <h2>Why DevTrybe</h2>
          <div className="features">
            <div className="feature">
              <h3>
                <FaConnectdevelop /> Connect Easily
              </h3>
              <p className="feature-description">
                Follow developers and stay updated with their journey.
              </p>
            </div>
            <div className="feature">
              <h3>
                <FaIdBadge /> Showcase your profile
              </h3>
              <p className="feature-description">
                Create a personal dev card with your skills and social links.
              </p>
            </div>
            <div className="feature">
              <h3>
                <FaSearch /> Discover Talent
              </h3>
              <p className="feature-description">
                Find developers by skills, roles, or interests.
              </p>
            </div>
            <div className="feature">
              <h3>
                <FaUserFriends /> Grow Your Network{" "}
              </h3>
              <p className="feature-description">
                Build meaningful connections in tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}

      <section>
        <div className="how-it-works">
          <h2>Get Started in 3 Simple Steps</h2>
          <div className="stepByStep">
            <div className="step">
              <h3><FaUser /> Create Your Profile</h3>
              <p className="step-description">
                Sign up and build your developer identity.
              </p>
            </div>
            <div className="step">
              <h3><FaCode /> Explore Developers</h3>
              <p className="step-description">
                Browse and discover amazing talents.
              </p>
            </div>
            <div className="step">
              <h3><FiUserPlus /> Connect and Follow</h3>
              <p className="step-description">
                Follow developers on all social platform and grow your network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer Section --> */}

      <footer>
        <a href="#" className="footer-link">
          About
        </a>
        <hr />
        <a href="#" className="footer-link">
          Contact
        </a>
        <hr />
        <a href="#" className="footer-link">
          Privacy
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
