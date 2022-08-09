import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <div className="nav-logo">State management</div>
        <div className="nav-list">
          <ul>
            <li className="list-items">
              <NavLink to="/">Zustand 1</NavLink>
            </li>
            <li className="list-items">
              <NavLink to="/zustand2">Zustand 2</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
