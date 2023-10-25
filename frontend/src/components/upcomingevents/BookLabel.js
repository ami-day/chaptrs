import React, { useState, useEffect } from "react";
import "./booklabel.css";
// import "../upcomingevents.js";

const BookLabel = ({ session }) => {
  const [token, _] = useState(window.localStorage.getItem("token"));
  const [books, setBooks] = useState([]);

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
          console.log("Hello data", data);
          window.localStorage.getItem("token", data.token);
          setBooks(data.books);
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

  return (
    <div className="label">
      <div className="upcoming-bookclub-book-information">
        {session ? (
          <div>
            <div>
              <h3>Title: {bookIdToTitle(session.chosen_book)}</h3>
            </div>
            <div>
              <h3>Author: {bookIdToAuthors(session.chosen_book)}</h3>
            </div>
            <div>
              <h3>
                Year Published: {bookIdToYearPublished(session.chosen_book)}
              </h3>
            </div>
          </div>
        ) : (
          <h3>No Sessions Available</h3>
        )}
      </div>
    </div>
  );
};

export default BookLabel;
