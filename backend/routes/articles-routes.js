const express = require("express");

const router = express.Router();

const articlesController = require("../controllers/articles-controllers");

//
//dont forget to add validation to the needed routes!
//

router.get("/", articlesController.getArticles);

router.post("/", articlesController.postArticle);

router.patch("/:aid", articlesController.pathArticle);

router.delete("/:aid", articlesController.deleteArticle);

module.exports = router;
