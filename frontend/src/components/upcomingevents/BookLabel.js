import React from "react";
import "./booklabel.css";
// import "../upcomingevents.js";

const BookLabel = ({ sessions }) => {
  return (
    <div className="label">
      <div className="upcoming-bookclub-book-information">
        {sessions ? (
          sessions.map((session) => (
            <div key={session._id}>
              <h3>Title: {session.book}</h3>
            </div>
          ))
        ) : (
          <h3>No sessions available</h3>
        )}
      </div>
    </div>
  );
};

export default BookLabel;