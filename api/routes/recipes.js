const express = require("express");
const router = express.Router();
const RecipesController = require("../controllers/recipes");


router.get("/", RecipesController.getRandomRecipes);

// router.post("/", RecipesController.);


module.exports = router;
