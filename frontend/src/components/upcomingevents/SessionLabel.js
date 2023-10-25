import React from "react";
import "./sessionlabel.css";

const SessionLabel = ({ session }) => {
  return (
    <div className="label">
      <div className="upcoming-session-information">
        {session ? (
          <div>
            <h3>Date: {session.date}</h3>
            <h3>Location: {session.location}</h3>
            <h3>Members Attending: {session.users_attending}</h3>
          </div>
        ) : (
          <h3>No session available</h3>
        )}
      </div>
    </div>
  );
};

export default SessionLabel;
