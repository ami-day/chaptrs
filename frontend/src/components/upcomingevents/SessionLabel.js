import React from "react";
import "./sessionlabel.css";

const SessionLabel = ({ session, membersAttending }) => {
  return (
    <div className="label">
      <div className="upcoming-session-information">
        {session ? (
          <div>
            <h3 className="sessions-font">Date: {session.date}</h3>
            <h3 className="sessions-font">Location: {session.location}</h3>
            <div className="members-attending sessions-font">
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
