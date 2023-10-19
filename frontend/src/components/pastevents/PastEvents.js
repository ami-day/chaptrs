import React from "react";
import "./pastevents.css";
const book = require('../upcomingevents/book.jpg');

const PastEvents = () => {
  return (
    <div className="past-events">
      <div className="section-title">
        <div className="content">
          <div className="text-wrapper">Past Events</div>
        </div>
      </div>
      <div className="div">
        <div className="row">
          <div className="card">
            <img className="placeholder-image" alt="Placeholder image" src={book} />
          </div>
          <div className="placeholder-image-wrapper">
            <img className="placeholder-image" alt="Placeholder image" src={book} />
          </div>
        </div>
        <div className="row-2">
          <div className="card">
            <img className="placeholder-image" alt="Placeholder image" src={book} />
          </div>
          <div className="placeholder-image-wrapper">
            <img className="placeholder-image" alt="Placeholder image" src={book} />
          </div>
        </div>
      </div>
      <div className="content-2" />
    </div>
  );
};

export default PastEvents;
