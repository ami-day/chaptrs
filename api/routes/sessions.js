const express = require("express");
const router = express.Router();
const tokenChecker = require("../token_checker/token_checker");

const SessionsController = require("../controllers/sessions");
// const session = require("express-session");
// We think we don't need this line ^ 

router.post("/", tokenChecker, SessionsController.Create);
router.get("/", tokenChecker, SessionsController.Index);
router.post("/:session_id/attend", tokenChecker, SessionsController.AddAttending);


module.exports = router;