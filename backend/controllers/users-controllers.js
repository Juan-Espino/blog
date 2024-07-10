const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const db = require("../database/db");
const bcrypt = require("bcrypt");

//constroller for signing up users
const signup = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(new HttpError("Invalid input, please check your data", 400));
	}

	const { email, password } = req.body;

	//check no other user with same email
	const checkExistingUser = `SELECT * FROM users WHERE email='${email}'`;
	db.query(checkExistingUser, async (err, data) => {
		if (err) {
			const error = new HttpError(
				"Error accessing database, please try again.",
				500
			);
			return next(error);
		}
		if (data.length > 0) {
			console.log("email exist!!!");
			return next(new HttpError("Error! User email already exist.", 401));
		} else {
			//hash password
			let hashedPassword;
			try {
				hashedPassword = await bcrypt.hash(password, 12);
			} catch (err) {
				const error = new HttpError(
					"Error creating user, please try again.",
					500
				);
				return next(error);
			}

			//insert new user to database
			const inserNewUser = "INSERT INTO users (email, pass) VALUES(?)";
			const values = [email, hashedPassword];
			db.query(inserNewUser, [values], (err, data) => {
				if (err) {
					const error = new HttpError(
						"Error inserting new user to database, please try again.",
						500
					);
					return next(error);
				}

				console.log("success");
			});

			/*
			add token 
			*/
			res.status(201).json("success");
		}
	});
};

//controller for logging in users
const login = async (req, res, next) => {
	const { email, password } = req.body;
	console.log(req.body);

	const existingUser = `SELECT * FROM users WHERE email='${email}'`;
	db.query(existingUser, async (err, data) => {
		console.log(req.body);
		if (data.length < 1) {
			return next(new HttpError("Could not find user with this email.", 400));
		} else {
			//decrypt password and compare to database

			let isValidPassword = false;
			try {
				isValidPassword = await bcrypt.compare(password, data[0].pass);
			} catch (err) {
				return next(
					new HttpError("Error, please check credentials and try again."),
					500
				);
			}
			if (!isValidPassword) {
				return next(
					new HttpError("Error, invalid credentials, please try again."),
					403
				);
			}

			//
			/*
			create token
			*/
			res.json({ success: "success", email, password });
		}
	});
};

exports.login = login;
exports.signup = signup;
