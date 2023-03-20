import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="navlogo_text">CreativeSpace</span>
          <span className="navlogo_dot">.</span>
        </div>
        <div className="links">
          <span>CreativeSpace Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>join</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
