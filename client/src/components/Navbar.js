import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../styles/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo and Brand Name */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="logo.avif" // Replace with the actual path to your logo image
            alt="Logo"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <div className="text-left" href="#home">
            <span style={{ display: "block", fontWeight: "bold" }}>Chennai</span>
            <span style={{ display: "block" }}>Hoopers</span>
          </div>
        </a>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            {/* Dropdown for Achievements */}
            <li className="nav-item dropdown px-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Achievements
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#achievements">
                    GWT Achievements
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#achievements">
                    Rhythmic Achievements
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item  px-3">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
