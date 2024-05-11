// components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Left portion of the navbar */}
        <div className="navbar-brand">
          <img src="./iitbsportslogo.png" alt="Logo" className="mr-2" />
          IITB Sports
        </div>
        
        {/* Right portion of the navbar */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sports-facilities" className="nav-link">Sports Facilities at IITB</Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
