const express = require("express");
const router = express.Router();
const tokenChecker = require("../token_checker/token_checker");

const SessionsController = require("../controllers/sessions");
const session = require("express-session");

router.post("/", tokenChecker, SessionsController.Create);
router.get("/", tokenChecker, SessionsController.Index);

module.exports = router;