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
          <div>
                <p>Hello</p>
            </div>
          </div>
          <div className="card">
          <div>
                <p>Hello</p>
            </div>
          </div>
        </div>
        <div className="row-2">
          <div className="card">
          <div>
                <p>Hello</p>
            </div>
          </div>
          <div className="card">
          <div>
                <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-2" />
    </div>
  );
};

export default PastEvents;
