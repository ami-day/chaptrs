import React from "react";
import "./upcomingevents.css";
const book = require('./book.jpg');

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <div className="section-title">
        <div className="content">
          <div className="text-wrapper">Upcoming Events</div>
        </div>
      </div>
      <div className="upcoming-event-block">
        <div className="book-wrapper">
          <img className="book" alt="Book" src={book} />
        </div>
      </div>
      <div className="upcoming-event-block">
        <div className="book-wrapper">
          <img className="book" alt="Book" src={book} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
