import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

const Button = ({ className, divClassName, text = "Get In Touch" }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`get-in-touch ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;