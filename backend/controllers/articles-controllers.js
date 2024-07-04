const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const db = require("../database/db");

//controller that returns all articles in the database
const getArticles = async (req, res, next) => {
	const q = "SELECT * FROM articles";
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		console.log(data);
		return res.json(data);
	});
};

/*
  needs credentials to access these post request
*/

//controller for creating a new article
const postArticle = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(
			new HttpError(
				"Invalid inputs passed, please check your title or paragraph.",
				422
			)
		);
	}
	const { title, paragraph, img, creatorId } = req.body;

	//verify creator exist in database
	//could use users table later
	//
	//ADD IMGS AFTER CONNECTING THE FRONT AND BACKENDS!!!
	/*

	*/
	const findCreatorId = `SELECT creatorId FROM articles WHERE (creatorId=${creatorId})`;
	db.query(findCreatorId, (err, data) => {
		if (err) {
			const error = new HttpError("Error", 500);
			return next(error);
		}
		//check if userexist and by seeing if they have post
		if (data.length < 1) {
			const error = new HttpError("Error, you are not a creator", 401);
			return next(error);
		}
	});

	//create article in database
	//&& add it to the creator Articles[] */
	//
	//
	/*

	*/
	const insertArticle = `INSERT INTO articles (title, paragraph, img, creatorId) VALUES (?)`;
	const values = [title, paragraph, img, creatorId];

	db.query(insertArticle, [values], (err, data) => {
		if (err) {
			const error = new HttpError(
				"Could not insert article to the database, please try again.",
				500
			);
			return next(error);
		}
		return res.status(201).json(data);
	});
};

//controller for PATCHing an article
const patchArticle = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(
			new HttpError(
				"Invalid inputs passed, please check your title or paragraph.",
				422
			)
		);
	}

	const { title, paragraph, creatorId } = req.body;

	const articleId = req.params.aid;

	//verify creator exist in database && aid is in their articles[]
	/*

	*/
	const findCreatorId = `SELECT creatorId FROM articles WHERE (creatorId=${creatorId})`;
	db.query(findCreatorId, (err, data) => {
		if (err) {
			const error = new HttpError("Error could not connect to database.", 500);
			return next(error);
		}
		//check if userexist and by seeing if they have post
		if (data.length < 1) {
			const error = new HttpError("Error, you are not a creator", 401);
			return next(error);
		}
	});

	// find article by articelId in database && update title, paragraph
	const updateArticle = `UPDATE articles SET title = '${title}', paragraph = '${paragraph}' WHERE id = '${articleId}'`;

	console.log(title);
	db.query(updateArticle, (err, data) => {
		if (err) {
			const error = new HttpError(
				"Could not update database please try again.",
				500
			);
			return next(error);
		}
		res.status(200).json(data);
	});
};

//controller for DELETING an article
const deleteArticle = async (req, res, next) => {
	const articleId = req.params.aid;

	/* 
	use req.userData.creatorId to determine if this user can delete this article
	*/
	//delete article and DELETE!!!!! article from the creators articles[]

	const deleteArticle = `DELETE FROM articles WHERE id = ${articleId}`;
	db.query(deleteArticle, (err, data) => {
		if (err) {
			const error = new HttpError(
				"Error deleting article please try again",
				500
			);
			return next(error);
		}
		return res.status(200).json(data);
	});
};

exports.getArticles = getArticles;
exports.postArticle = postArticle;
exports.patchArticle = patchArticle;
exports.deleteArticle = deleteArticle;
