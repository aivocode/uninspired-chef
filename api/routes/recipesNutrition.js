const express = require("express");
const router = express.Router();
const RecipesNutritionController = require("../controllers/recipesNutrition");

router.get("/", RecipesNutritionController.getRecipe);

module.exports = router;
