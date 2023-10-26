import React, { useState, useEffect } from "react";
import "./coverlabel.css";

const CoverLabel = ({ session }) => {
  const [token, _] = useState(window.localStorage.getItem("token"));
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // console.log("Checking books");
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

  function bookIdToCover(book_id) {
    const foundBook = books.find((book) => book._id === book_id);
    return foundBook ? foundBook.cover_photo : undefined;
  }

  return (
    <div className="label">
      <div className="upcoming-bookclub-book-cover-information">
        {session ? (
          <div key={session.chosen_book}>
            <div>
              <img
                className="book"
                alt="Book"
                src={bookIdToCover(session.chosen_book)}
              />
            </div>
          </div>
        ) : (
          <h3>No Cover Available</h3>
        )}
      </div>
    </div>
  );
};

export default CoverLabel;
