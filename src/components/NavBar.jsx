import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink
          to="/"
          //   style={({ isActive }) => {
          // return { color: isActive ? "red" : "grey" };
          //   }}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Products
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
