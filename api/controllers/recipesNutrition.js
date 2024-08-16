// Load environment variables from the /api/.env file
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

const Pantry = require("../models/pantry");

const recipeAppId = process.env.RECIPE_APP_ID;
const recipeAppKey = process.env.RECIPE_APP_KEY;

// const Recipe = require("../models/recipe");
const { generateToken } = require("../lib/token");

const getRecipe = async (req, res) => {
  ingredients = ["tomato", "pork", "beans", "garlic"];

  try {
    // converts ingredients Array to formatted string to insert into the URL
    const formattedString = ingredients.toString().replaceAll(",", "%2C%20");

    // fetches data from Edamam API
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${formattedString}&app_id=${recipeAppId}&app_key=${recipeAppKey}`
    );
    data = await response.json();
    console.log("this is the data: ", data);

    //if statement to check the value of count (hits for combination). If 0 then we remove a random ingredient and then go again
    if (data.count === 0) {
      // chatGPT generated code to initialise a randomIndex that
      // we will use to remove one ingredient from the array
      const randomIndex = Math.floor(Math.random() * ingredients.length);
      ingredients.splice(randomIndex, 1);
    }

    // Once we get a hit, we return the data.
    if (data.count > 0) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        message:
          "Couldn't find a recipe with your ingredients. You need to go shopping!",
      });
    }
  } catch (err) {
    console.log("You got an error!: ");
    res.status(500).json({ message: "error fetching a recipe" });
  }
};

const RecipeNutritionController = {
  getRecipe: getRecipe,
};

module.exports = RecipeNutritionController;
