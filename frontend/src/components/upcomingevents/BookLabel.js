import React, { useState, useEffect } from "react";
import "./booklabel.css";
// import "../upcomingevents.js";
import sortBy from 'lodash/sortBy';

const BookLabel = () => {
  const [token, _] = useState(window.localStorage.getItem("token"));
  const [books, setBooks] = useState([]);
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    console.log("Checking books");
    if (token) {
      fetch("/books", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.getItem("token", data.token);
          setBooks(data.books);
        });
    }
  }, []);

  useEffect(() => {
    console.log("Getting sessions");
    if (token) {
      fetch("/sessions", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.getItem("token", data.token);
          setSessions(data.sessions);
        });
    }
  }, []);

  function bookIdToTitle(book_id) {
    const foundBook = books.find((book) => book._id === book_id);
    return foundBook ? foundBook.title : undefined;
  }

  function bookIdToAuthors(book_id) {
    const foundBook = books.find((book) => book._id === book_id);
    return foundBook ? foundBook.authors[0] : undefined;
  }

  function bookIdToYearPublished(book_id) {
    const foundBook = books.find((book) => book._id === book_id);
    return foundBook ? foundBook.year_published : undefined;
  }

  if(sessions) {
  let upcoming = []
  let past = []
  sessions.forEach(session => {
    if (new Date(session.date) >= new Date()) {
      upcoming.push(session);
    } else {
      past.push(session);
    }});
    const upcoming_sorted = sortBy(upcoming,"date");
    const past_sorted = sortBy(past,"date");
  };

  return (
    <div className="label">
      <div className="upcoming-bookclub-book-information">
        {sessions ? (
          sessions.map((session) => (
            <div key={session.chosen_book}>
              <div>
                <h3>Title: {bookIdToTitle(session.chosen_book)}</h3>
              </div>
              <div>
                <h3>Author: {bookIdToAuthors(session.chosen_book)}</h3>
              </div>
              <div>
                <h3>Year Published: {bookIdToYearPublished(session.chosen_book)}</h3>
              </div>
            </div>
          ))
        ) : (
          <h3>No Sessions Available</h3>
        )}
      </div>
    </div>
  );
};

export default BookLabel;
