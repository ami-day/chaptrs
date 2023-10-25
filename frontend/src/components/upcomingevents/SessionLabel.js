import React from "react";
import "./sessionlabel.css";

const SessionLabel = ({ session, membersAttending }) => {
  return (
    <div className="label">
      <div className="upcoming-session-information">
        {session ? (
          <div>
            <h3>Date: {session.date}</h3>
            <h3>Location: {session.location}</h3>
            <div className="members-attending">
              Members Attending: {membersAttending}
            </div>
          </div>
        ) : (
          <h3>No session available</h3>
        )}
      </div>
    </div>
  );
};

export default SessionLabel;
