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

router.post(
	"/login",
	[
		check("email").normalizeEmail().isEmail(),
		check("password").isLength({ min: 6 }),
	],
	usersController.login
);

module.exports = router;
