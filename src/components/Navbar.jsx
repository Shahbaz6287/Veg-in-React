// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from 'react';
import '../style.css'; // Ensure the CSS file path is correct

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="navbar-brand" href="#">
          {/* OurBrand */}
        </a>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className="nav-right">
          <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
            <li><a href="#our-impact">Our Impact</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#for-grocers">For Grocers</a></li>
          </ul>
          <div className="dropdown">
            <button className="dropbtn">English</button>
            <div className="dropdown-content">
              <a href="#english">English</a>
              <a href="#spanish">Spanish</a>
            </div>
          </div>
          <button className="icon-button">🔍</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
