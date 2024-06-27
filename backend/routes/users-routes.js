const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users-controllers");

//routes beyond this point require authentication
router.post("/login", usersController.login);

module.exports = router;
