const bodyParser = require("body-parser");
const express = require("express");

const articlesRoutes = require("./routes/articles-routes");
const usersRoutes = require("./routes/users-routes");

const port = 5000;
const app = express();

app.use(bodyParser.json());

//headers
app.use((req, res, next) => {
	//allows any domain to send a request
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

app.listen(port, () => {
	console.log("Listening!");
});
