const Session = require("../models/session");
const TokenGenerator = require("../lib/token_generator");
const session = require("express-session");

const SessionsController = {
    Index: (req, res) => {
        Session.find((err, sessions) => {
            if (err) {
                throw err;
            }
            const token = TokenGenerator.jsonwebtoken(req, session_id)
            res.status(200).json({ sessions: sessions, token: token});
        });
    },
    Create: (req, res) => {
        Session.save((err) => {
            if (err) {
                throw err;
            };
            const token = TokenGenerator.jsonwebtoken(req.session_id)
            res.status(201).json({ message: 'OK', token: token});
        });
    },
};

module.exports = SessionsController;