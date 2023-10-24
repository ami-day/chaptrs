import React, { useState, useEffect } from "react";
import "./upcomingevents.css";
import BookLabel from "./BookLabel";
import SessionLabel from "./SessionLabel";
import CoverLabel from "./CoverLabel";
import "../session/SessionForm";
import sortBy from "lodash/sortBy";

// TODO update other files (e.g. box.js/bookLabel.js/SessionLabel.js) - call hooks

const UpcomingEvents = () => {
  const [user, setUser] = useState("");
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  // useEffect(() => {
  //   console.log("Checking users")
  //   if (token) {
  //     fetch("/users", {
  //       method: "get",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("user data", data.user)
  //         setUser(data.user);
  //       });
  //   }
  // }, []);
  // TODO: Check necessity of useEffect hook for user - do we need this as we are using a token below for session display?

  // TODO: In order to dislpay one bookclub per component we can use the bookID which is used in both the book and the session objects.
  // We could replicate the .find method as we did for title etc below and pass through both book and session.

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

  // const sortByDate = (array) => {
  //   array.sort((a, b) => {
  //     return new Date(b.createdAt) - new Date(a.createdAt);
  //   });
  // }

  return (
    <div className="upcoming-events">
      <div className="section-title">
        <div className="content">
          <div className="text-wrapper">Upcoming Events</div>
        </div>
      </div>
      <div className="upcoming-event-block">
        {upcomingSessions ? (
          <div className="book-wrapper">
            <CoverLabel session={upcomingSessions[0]}></CoverLabel>
            <div className="box">
              <BookLabel session={upcomingSessions[0]}></BookLabel>
            </div>
            <div className="box">
              <SessionLabel sessions={upcomingSessions}></SessionLabel>
            </div>
          </div>
        ) : (
          <div className="book-wrapper"></div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
