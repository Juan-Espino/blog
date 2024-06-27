const bodyParser = require("body-parser");
const express = require("express");

const port = 5000;
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
	res.send("HELLO THERE!");
});

app.listen(port, () => {
	console.log("Listening!");
});
