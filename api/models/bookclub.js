const mongoose = require("mongoose");

const BookClubSchema = new mongoose.Schema({
    // name: "string",
    books: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "Book"}
        ],
    users: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "user"}
        ],
    sessions: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "session"}
        ],
})

const BookClub = mongoose.model("BookClub", BookClubSchema);

module.exports = BookClub;