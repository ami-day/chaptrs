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

    AddAttending: async (req, res) => {
        const sessionId = req.params.session_id;
    
        try {
            const session = await Session.findOne({ _id: sessionId });
            if (!session) {
                console.log("Session not found:", sessionId);
                return res.status(404).json({ error: "Session not found" });
            }
            console.log("Session found:", session);

            await session.save();
            res.status(200).json({ session: session });
        } catch (err) {
            console.error("Error:", err);

            return res.status(500).json({ error: "Internal Server Error" });
        }
    },
};

module.exports = SessionsController;
