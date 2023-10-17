const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
    date: { type: String, required: true },
    location: { type: String, required: true },
    users: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },
    ],
});

const Session = mongoose.model("Session", SessionSchema);

module.exports = Session;