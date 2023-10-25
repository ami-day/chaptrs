const Session = require("../models/session");
const User = require("../models/user");
const TokenGenerator = require("../lib/token_generator");
const session = require("express-session");

const SessionsController = {
    Index: (req, res) => {
        Session.find((err, sessions) => {
            if (err) {
                throw err;
            }
            const token = TokenGenerator.jsonwebtoken(req.session_id)
            res.status(200).json({ sessions: sessions, token: token});
        });
    },


    Create: (req, res) => {
        const session = new Session(req.body);
        session.save((err) => {
            if (err) {
                throw err;
            };
            const token = TokenGenerator.jsonwebtoken(req.session_id)
            res.status(201).json({ message: 'OK', token: token});
        });
    },
    // Add attendence 


    // AddAttending: (req, res) => {
    //     Session.findOne({ _id: req.params.session_id })
    //         .populate("users_attending")
    //         // Check what populate is doing 
    //         .exec((err, session) => {
    //             if (err) {
    //                 throw err;
    //             }
    //             const user = req.user_id;
    //             const isSessionLikedByUser = session.likes.includes(user);
    //             if (isSessionLikedByUser) {
    //                 session.likes.pop(user);
    //             } else {
    //                 session.likes.push(user);
    //             }
    //             session.save((err) => {
    //             if (err) {
    //                 throw err;
    //             }
    //             res.status(201).json({ session: session });
    //             });
    //         });
    //     },

    AddAttending: (req, res) => {
        const sessionId = req.params.session_id;
        const userId = req.user_id;

        Session.findOne({ _id: sessionId }, (err, session) => {
            if (err) {
                return res.status(500).json({ error: "Internal Server Error" });
            }

            // Check if the user is already attending the session
            const isUserAttending = session.users_attending.includes(userId);

            if (!isUserAttending) {
                // If the user is not already attending, add them to the list of attendees
                session.users_attending.push(userId);
            }

            session.save((err) => {
                if (err) {
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                res.status(200).json({ session: session });
            });
        });
    },
};

module.exports = SessionsController;
