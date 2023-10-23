import React from "react";
import "./upcomingevents.css";
import BookLabel from "./BookLabel";
import SessionLabel from "./SessionLabel";
const book = require('./book.jpg');

//imports

// create useState hooks


// create fetch requests - user (current user) & sessions


// update return for dynamic entry of data from fetch request


// TODO update other files (e.g. box.js/bookLabel.js/SessionLabel.js) - call hooks

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
          <div className="box">
            <BookLabel></BookLabel>
          </div>
          <div className="box">
          <SessionLabel></SessionLabel>
          </div>
          </div>
      <div className="upcoming-event-block">
        <div className="book-wrapper">
          <img className="book" alt="Book" src={book} />
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
