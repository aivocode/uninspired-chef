const express = require("express");
const router = express.Router();
const RecipesController = require("../controllers/recipes");

router.get("/", RecipesController.getRandomRecipes);
router.post("/savedrecipes", RecipesController.addRecipeToFavourites);
router.delete("/savedrecipes", RecipesController.removeRecipeFromFavourites)

module.exports = router;
