import React from "react";
import "./pastevents.css";
import BookLabel from "../upcomingevents/BookLabel";
import SessionLabel from "../upcomingevents/SessionLabel";
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
          <div className="past-event-block">
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

          <div className="past-event-block">
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
        <div className="row-2">
        <div className="past-event-block">
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
            <div className="indv-row">
          <div className="past-event-block">
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
      </div>
      <div className="content-2" />
    </div>
  );
};

export default PastEvents;
