const express = require("express");
const router = express.Router();
const tokenChecker = require('../token_checker/token_checker');

const BooksController = require("../controllers/books");

router.get("/", tokenChecker, BooksController.Index);
router.post("/", tokenChecker, BooksController.Create);

module.exports = router;