import React from "react";
import Button from "./Button";
import "./header.css";
const picture = require('./homepage-pic.jpg');


const Header = ({setModal}) => {
  
  const onClickHandler = () => {
    //event.preventDefault();
    setModal(true);
  }

  return (
    <div className="header row justify-content-center" >
      <div className="header-left col-auto" style={{paddingTop: "150px"}} >
        <div className="content">
          <div className="text-wrapper">Chaptrs</div>
          <p className="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique.
          </p>
        </div>
        <div className="actions">
          <Button className="button-instance" divClassName="design-component-instance-node" text="Create an Event" onClick={onClickHandler} />
        </div>
        </div>
      <div className="header-right col-4">
        <img className="img-fluid fang-wei-lin" alt="main-picture" src={picture}  style={{minWidth: "10%", maxWidth: "100%"}} />
      </div>
    </div>
  );
};

export default Header;