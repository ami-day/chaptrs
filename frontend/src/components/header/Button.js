import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

const Button = ({ className, divClassName, text = "Get In Touch", onClick }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      <div className={`get-in-touch ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired, // ensure that a function is passed for onClick
  className: PropTypes.string,
  divClassName: PropTypes.string,  
};

export default Button;