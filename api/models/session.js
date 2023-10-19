const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
    date: { type: String, required: true },
    location: { type: String, required: true },
    users_attending: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        },
    ],
    chosen_book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    suggested_books: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User", 
            },
            book_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Book",
            },
            required: false
        },
    ],
});
/* For the chosen_book, there's no need for an array as we only need one book. 
So we can have just an ObjectId that references the Book model.
For suggested_books, we can represent it as an array of subdocuments, where each subdocument has a user_id 
(reference to User) and a book_id (reference to Book).*/

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;