import React from "react";
import Button from "./Button";
import "./header.css";
const logo = require('../navbar/logo.png');

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="content">
          <div className="text-wrapper">Chaptrs</div>
          <p className="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique.
          </p>
        </div>
        <div className="actions">
          <Button className="button-instance" divClassName="design-component-instance-node" text="Create an Event" />
        </div>
      </div>
      <img className="fang-wei-lin" alt="main-picture" src={logo} />
    </div>
  );
};

export default Header;