const Book = require("../models/book");
const TokenGenerator = require("../lib/token_generator");

const BookController = {
  Index: (req, res) => {
    Book.find((err, books) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.book_id)
      console.log("Generated Token:", token);
      res.status(200).json({ books: books, token: token });
    });
  },
  Create: (req, res) => {
    const book = new Book(req.body);
    Book.save((err) => {
      if (err) {
        throw err;
      }

      const token = TokenGenerator.jsonwebtoken(req.book_id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
};

module.exports = BookController;
