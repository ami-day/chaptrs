import React from "react";
import Button from "./Button";
import "./header.css";
const picture = require('./homepage-pic.jpg');


const Header = ({setModal}) => {
  
  const onClickHandler = () => {
    console.log("Button clicked");
    //event.preventDefault();
    setModal(true);
  }

  return (
    <div className="header row justify-content-center" >
      <div className="header-left col-auto" style={{paddingTop: "150px"}} >
        <div className="content">
          <div className="text-wrapper">Chaptrs</div>
          <p className="div">
          Welcome to Chaptrs, an app for bookworms! Plan and track your bookclubs with fellow book lovers right here.</p>
          <p className="div">Discover Brontë with buddies, find new friends with Fitzgerald, and review your favourites with Rowling.
          Read on to explore your very first Chaptr!
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