/* Navbar.js */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="fixed flex space-x-2">
        <li className="nav-item">
          <NavLink
            to="/shubhadamohite"
            activeClassName="active-link"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            activeClassName="active-link"
            className="nav-link"
          >
           About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            activeClassName="active-link"
            className="nav-link"
          >
            Blog
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            to="/work"
            activeClassName="active-link"
            className="nav-link"
          >
            Work
          </NavLink>
        </li> */}
        {/* Add more navigation links here */}
     
      </ul>
    </nav>
  );
}

export default Navbar;
