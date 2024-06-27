const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const articlesController = require("../controllers/articles-controllers");

//
//dont forget to add validation to the needed routes!
//

router.get("/", articlesController.getArticles);

//routes beyond this point require authentication

//
//add image controllers here aswell
//
router.post(
	"/",
	[check("title").not().isEmpty(), check("paragraph").isLength({ min: 300 })],
	articlesController.postArticle
);

router.patch(
	"/:aid",
	[check("title").not().isEmpty(), check("paragraph").isLength({ min: 300 })],
	articlesController.pathArticle
);

router.delete("/:aid", articlesController.deleteArticle);

module.exports = router;
