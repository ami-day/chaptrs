import { Link } from 'react-router-dom';
import React from "react";
import "./navbar.css";
const logo = require('./logo.png');

const logout = () => {
  window.localStorage.removeItem("token");
}

const Navbar = ({currentPage}) => {
  return (
    <div className="navbar navbar-custom navbar-expand-lg flex sticky-top mb-5" style={{background: '#a2c3a4c2'}}>
      <div className="navbar-container container-fluid">
        <img className="logo" alt="Logo" src={logo} />
        <div className="column" />
        <div className="d-flex flex-row" style={{padding: '10px'}}>
          {currentPage === "homepage" && (
            <>
              <Link className="text-wrapper nav-link active fw-bold" style={{padding: '0 5px'}} to="/">Home</Link>
              <div className="text-wrapper-2 mr-3" style={{padding: '0 5px'}} >Dashboard</div>
              <div className="text-wrapper-2 mr-3" style={{padding: '0 5px'}}>Community</div>
            </>
          )}
          
          {currentPage === 'signup' || currentPage === 'login' ? (
            <>
            <Link className="text-wrapper-2 mr-3 nav-link" style={{padding: '0 5px'}} to="/login">Login</Link>
            <Link className="text-wrapper-2 mr-3 nav-link" style={{padding: '0 5px'}} to="/signup">Signup</Link>
            </>
          ) : (
            <Link className="text-wrapper-2 mr-3 nav-link" style={{padding: '0 5px'}} onClick={logout} to="/login">Logout</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;