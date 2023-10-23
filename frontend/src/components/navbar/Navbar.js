import React from "react";
import "./navbar.css";
const logo = require('./logo.png');

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img className="logo" alt="Logo" src={logo} />
        <div className="column" />
        <div className="div">
          <div className="text-wrapper">Home</div>
          <div className="text-wrapper-2">Dashboard</div>
          <div className="text-wrapper-2">Community</div>
          <div className="text-wrapper-2">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;