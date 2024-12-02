import React from 'react';
import '../styles/Navbar.css'; // Import the CSS for styling the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <img src="logo.avif" alt="Chennai Hoopers Logo" />
        </div>
        <span className="brand-name">Chennai Hoopers</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;