const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const articlesController = require("../controllers/articles-controllers");
const fileUpload = require("../middleware/file-upload");

router.get("/", articlesController.getArticles);

//routes beyond this point require authentication
//
router.post(
	"/",
	fileUpload.single("image"),
	[check("title").not().isEmpty(), check("paragraph").isLength({ min: 300 })],
	articlesController.postArticle
);

router.patch(
	"/:aid",
	[check("title").not().isEmpty(), check("paragraph").isLength({ min: 300 })],
	articlesController.patchArticle
);

router.delete("/:aid", articlesController.deleteArticle);

module.exports = router;
