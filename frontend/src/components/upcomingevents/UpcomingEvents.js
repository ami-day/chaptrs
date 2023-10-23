import React, { useState, useEffect } from 'react';
import "./upcomingevents.css";
import BookLabel from "./BookLabel";
import SessionLabel from "./SessionLabel";
import "../session/SessionForm";

// TODO update other files (e.g. box.js/bookLabel.js/SessionLabel.js) - call hooks

const UpcomingEvents = () => {
  const [user, setUser] = useState(""); 
  const [sessions, setSessions] = useState([]);
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

  useEffect(() => {
    console.log("Checking sessions")
    if (token) {
      fetch("/sessions", {
        method: "get", 
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => response.json())
        .then(async data => {
          console.log("session data", data.sessions)
          window.localStorage.getItem("token", data.token)
          // sortByDate(data.sessions)
          setSessions(data.sessions);
        })
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
        <div className="book-wrapper">
          <img className="book" alt="Book" src="https://covers.openlibrary.org/b/isbn/9780008334840-M.jpg" />
          <div className="box">
            <BookLabel sessions={sessions}></BookLabel>
          </div>
          <div className="box">
          <SessionLabel></SessionLabel>
          </div>
          </div>
      <div className="upcoming-event-block">
        <div className="book-wrapper">
          <img className="book" alt="Book" src="https://covers.openlibrary.org/b/isbn/9780008334840-M.jpg" />
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
  );
};

export default UpcomingEvents;
