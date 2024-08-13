const express = require("express");
const router = express.Router();
const RecipesController = require("../controllers/recipes");


router.get("/", RecipesController.getRecipes);
// router.post("/", RecipesController.);


module.exports = router;
