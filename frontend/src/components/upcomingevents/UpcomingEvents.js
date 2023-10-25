import React, { useState, useEffect } from "react";
import "./upcomingevents.css";
import BookLabel from "./BookLabel";
import SessionLabel from "./SessionLabel";
import CoverLabel from "./CoverLabel";
import "../session/SessionForm";
import sortBy from "lodash/sortBy";

const UpcomingEvents = () => {
  const [user, setUser] = useState("");
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [membersAttending, setMembersAttending] = useState(0);
  // TODO: Do we need a usestate for userattending as well? 

  const numberOfUsersAttending = (session) => {
    return session.users_attending ? session.users_attending.length : 0;
  };

  const isUserAttending = (session) => {
    if (user && session.users_attending) {
      return session.users_attending.includes(user._id);
    }
      return false;
  };

  function getUpcomingSessions(sessions) {
    let upcoming = [];
    let today = new Date();
    sessions.forEach((session) => {
      if (new Date(session.date) >= today) {
        upcoming.push(session);
      }
    });
    return sortBy(upcoming, "date");
  }

  useEffect(() => {
    console.log("Checking sessions");
    if (token) {
      fetch("/sessions", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          console.log("session data", data.sessions);
          window.localStorage.getItem("token", data.token);
          let upcomingSessions = getUpcomingSessions(data.sessions);
          setUpcomingSessions(upcomingSessions);
        });
    }
  }, []);

  const handleAttendSession = (session) => {
    // Check if the user is already attending the session
    const isAttending = isUserAttending(session);

    // Prepare the data to send to the server
    const data = {
      session_id: session._id,
      user_id: user._id,
    };

    // Send a request to server to handle session attendance
    fetch(`/sessions/${session._id}/attend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          // Update the local state to reflect the change in attending status
          const updatedSessions = upcomingSessions.map((s) => {
            if (s._id === session._id) {
              if (!s.attending) { 
                s.attending = 0; 
              }
  
              // Check if the user is already attending
              if (s.users_attending.includes(user._id)) {
                s.users_attending = s.users_attending.filter(
                  (userId) => userId !== user._id
                );
                s.attending -= 1; 
                setMembersAttending(s.attending);
              } else {
                s.users_attending.push(user._id);
                s.attending += 1; 
                setMembersAttending(s.attending);
              }
            }
            return s;
          });

          const sessionBeingAttended = updatedSessions.find((s) => s._id === session._id);
          if (sessionBeingAttended) {
            setMembersAttending(sessionBeingAttended.attending);
          }
  
          setUpcomingSessions(updatedSessions);
        } else {
          console.error("Failed to update attendance status");
        }
      });
  };

  return (
<div className="upcoming-events">
  <div className="section-title">
    <div className="content">
      <div className="text-wrapper">Upcoming Events</div>
    </div>
  </div>
  {upcomingSessions ? (
    <div className="upcoming-event-block">
      {upcomingSessions.map((session) => (
        <div className="book-wrapper">
          <CoverLabel session={session}></CoverLabel>
          <div className="box">
            <BookLabel session={session}></BookLabel>
          </div>
          <div className="box">
            <SessionLabel session={session} membersAttending={numberOfUsersAttending(session)} />
          </div>
          <button onClick={() => handleAttendSession(session)}>
            {isUserAttending(session) ? "Unattend" : "Attend"}
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div className="upcoming-event-block"></div>
  )}
</div>

  );
};

export default UpcomingEvents;
