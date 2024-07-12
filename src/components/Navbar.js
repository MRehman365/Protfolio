import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
      <div className="container-fluid ms-2">
        <NavLink to="/">
          <a className="navbar-brand">M Rehman</a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <NavLink to="/">
              {" "}
              <li className="nav-item">
                <a className="nav-link me-5" aria-current="page">
                  Home
                </a>
              </li>
            </NavLink>
            <NavLink to="/services">
              {" "}
              <li className="nav-item">
                <a className="nav-link me-5">Services</a>
              </li>
            </NavLink>
            <NavLink to="/projects">
              {" "}
              <li className="nav-item me-0">
                <a className="nav-link me-5">Projects</a>
              </li>
            </NavLink>
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item disabled">Blog</a>
                </li>
                <li>
                  <a className="dropdown-item disabled">Team Member</a>
                </li>
                <li>
                  <a className="dropdown-item disabled">Contact Me</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div class="toggle toggle--daynight">
                <input
                  type="checkbox"
                  id="toggle-daynight"
                  class="toggle-checkbox"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
