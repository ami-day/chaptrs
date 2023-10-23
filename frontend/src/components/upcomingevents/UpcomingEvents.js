import React from "react";
import "./upcomingevents.css";
import BookLabel from "./BookLabel";
import SessionLabel from "./SessionLabel";

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
          <img className="book" alt="Book" src="https://covers.openlibrary.org/b/isbn/9780008334840-M.jpg" />
          <div className="box">
            <BookLabel></BookLabel>
          </div>
          <div className="box">
          <SessionLabel></SessionLabel>
          </div>
          </div>
      <div className="upcoming-event-block">
        <div className="book-wrapper">
          <img className="book" alt="Book" src="https://covers.openlibrary.org/b/isbn/9780008334840-M.jpg" />
          <div className="box">
          <BookLabel></BookLabel>
          </div>
          <div className="box">
          <SessionLabel></SessionLabel>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
};

export default UpcomingEvents;
