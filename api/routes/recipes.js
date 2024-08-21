const express = require("express");
const router = express.Router();
const RecipesController = require("../controllers/recipes");
const tokenChecker = require("../middleware/tokenChecker");

router.get("/", RecipesController.getRandomRecipes);
router.get("/favourites", tokenChecker, RecipesController.getFavouriteRecipes);
router.post("/favourites", tokenChecker, RecipesController.addRecipeToFavourites);
router.delete("/favourites", tokenChecker, RecipesController.removeRecipeFromFavourites)

module.exports = router;
