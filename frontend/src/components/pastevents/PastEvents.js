import React, { useState, useEffect } from "react"
import "./pastevents.css";
import BookLabel from "../upcomingevents/BookLabel";
import SessionLabel from "../upcomingevents/SessionLabel";
import CoverLabel from "../upcomingevents/CoverLabel";
import "../session/SessionForm";
import sortBy from "lodash/sortBy";
const book = require('../upcomingevents/book.jpg');

  const PastEvents = () => {
    const [user, setUser] = useState("");
    const [pastSessions, setPastSessions] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token"));
  
    function getPastSessions(sessions) {
      let past = [];
      let today = new Date();
      sessions.forEach((session) => {
        if (new Date(session.date) < today) {
          past.push(session);
        }
      });
      return sortBy(past, "date");
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
            let pastSessions = getPastSessions(data.sessions);
            setPastSessions(pastSessions);
          });
      }
    }, []);

  return (
<div className="past-events">
  <div className="section-title">
    <div className="content">
      <div className="text-wrapper">Past Events</div>
    </div>
  </div>
  {pastSessions ? (
    <div id="scrollable">
      {pastSessions.map((session) => (
        <div className="past-event-block">
        <div className="book-wrapper">
          <CoverLabel session={session}></CoverLabel>
          <div className="box">
            <BookLabel session={session}></BookLabel>
          </div>
          <div className="box">
            <SessionLabel session={session} />
          </div>
        </div>
        <div>
          </div>
          </div>
      ))}
    </div>
  ) : (
    <div className="past-event-block"></div>
  )}
</div>
  );
};

export default PastEvents;
