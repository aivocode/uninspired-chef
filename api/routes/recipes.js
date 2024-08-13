const express = require("express");
const router = express.Router();
const RecipesController = require("../controllers/recipes");


router.get("/", RecipesController.getAllPosts);
router.post("/", RecipesController.createPost);


module.exports = router;
