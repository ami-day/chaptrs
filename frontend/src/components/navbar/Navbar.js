import { Link } from 'react-router-dom';
import React from "react";
import "./navbar.css";
const logo = require('./logo.png');

const logout = () => {
  window.localStorage.removeItem("token");
}

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img className="logo" alt="Logo" src={logo} />
        <div className="column" />
        <div className="div">
          <Link className="text-wrapper" to="/">Home</Link>
          <div className="text-wrapper-2">Dashboard</div>
          <div className="text-wrapper-2">Community</div>
          <Link className="text-wrapper-2" onClick={logout} to="/login">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;