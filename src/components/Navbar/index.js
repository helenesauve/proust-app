import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";

function Navbar () {
    return (
        <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
      <h1 className="pageTitle">In Search of Proust</h1>
      </NavLink>
      <ul className="navbar-menu">
      <li className="navbar-item">
          <NavLink to="/" className="navbar-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className="navbar-link">About</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="https://github.com/helenesauve/searching-proust" className="navbar-link" target="_blank">Github</NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar;