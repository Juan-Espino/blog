const express = require("express");

const router = express.Router();

const articlesController = require("../controllers/articles-controllers");

router.get("/", articlesController.getArticles);

module.exports = router;
