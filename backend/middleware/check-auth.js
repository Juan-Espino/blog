const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
	if (req.method === "OPTIONS") {
		return next();
	}
	//Authorization: 'Bearer TOKEN'
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			throw new Error("Authentication Failed!");
		}
		//verify token
		const decodedToken = jwt.verify(token, process.env.JWT_KEY);
		req.userData = { creatorId: decodedToken.creatorId };
		next();
	} catch (err) {
		const error = new HttpError("Authentication Failed!", 401);
		return next(error);
	}
};
