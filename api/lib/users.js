const express = require("express");
const router = express.Router();
const tokenChecker = require('../token_checker/token_checker');

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);
router.get("/", tokenChecker, UsersController.Index)

module.exports = router;
