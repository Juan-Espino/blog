const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const usersController = require("../controllers/users-controllers");

router.post(
	"/signup",
	[
		check("email").normalizeEmail().isEmail(),
		check("password").isLength({ min: 6 }),
	],
	usersController.signup
);

//routes beyond this point require authentication
router.post("/login", usersController.login);

module.exports = router;
