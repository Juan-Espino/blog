const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users-controllers");

//
//dont forget to add validation to the needed routes!
//
router.post("/login", usersController.login);

module.exports = router;
