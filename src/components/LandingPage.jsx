import React from "react";



const LandingPage = ({setShowLogin}) => {
  
  return (
    <div className="landingPage">
      {/* <!-- Header Section --> */}

      <header className="logo-header">
        <div className="logo">
          <h3 className="logo1">Dev</h3>
          <h3 className="logo2">Trybe</h3>
        </div>

        <div className="signup-login">
          <button onClick={() => setShowLogin(true)} className="login">Login</button>
          <button onClick={() => setUserAdded(true)} className="sign-up">Sign Up</button>
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
