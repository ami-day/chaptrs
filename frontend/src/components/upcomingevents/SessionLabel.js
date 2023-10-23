import React from "react";
import "./sessionlabel.css";

const SessionLabel = ({ sessions }) => {
  return (
    <div className="label">
      <div className="upcoming-session-information">
        {sessions ? (
          sessions.map((session) => (
            <div key={session._id}>
              <h3>Location: {session.location}</h3>
            </div>
          ))
        ) : (
          <h3>No sessions available</h3>
        )}; 
      </div>
    </div>
  );
};

export default SessionLabel;