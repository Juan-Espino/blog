const fs = require("fs");
const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const articlesRoutes = require("../routes/articles-routes");
const usersRoutes = require("../routes/users-routes");
const HttpError = require("../models/http-error");

const port = 5000;
const app = express();

app.use(bodyParser.json());

app.use(
	"/uploads/images",
	express.static(path.join(__dirname, "../uploads/images"))
);

//headers
app.use((req, res, next) => {
	//allows any domain to sendz a request
	res.setHeader("Access-Control-Allow-Origin", "*");

	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);

	//allows access with any of these types of request
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
	next();
});

//route for all the article api calls
app.use("/api/articles", articlesRoutes);

//route for all the users api calls
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
	const error = new HttpError("Could not find this route.", 404);
	throw error;
});

app.use((error, req, res, next) => {
	if (req.file) {
		fs.unlink(req.file.path, (err) => {
			console.log(err);
		});
	}
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || "An unknown error has occurred!" });
});

app.listen(port, () => {
	console.log("Listening!");
});
