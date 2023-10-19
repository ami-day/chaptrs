const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    genre: { type: String, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    year_published: { type: String, required: true },
    // TODO: check type for year_published and session_id
    session: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
        required: false,
        },
    ],
    cover_photo: { type: String, required: false },
    personal_rating: { type: String, required: false },
    external_rating: { type: String, required: false },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;