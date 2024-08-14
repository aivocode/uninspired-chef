// Load environment variables from the /api/.env file
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const recipeAppId = process.env.RECIPE_APP_ID;
const recipeAppKey = process.env.RECIPE_APP_KEY;

// const Recipe = require("../models/recipe");
const { generateToken } = require("../lib/token");

// Populates an array with random ingredients for our call to the recipe API
const ingredients = ['red kidney beans', 'chicken', 'rice', 'tomatoes']

const getRandomRecipes = async (req, res) => {
    console.log('attempting to get random recipes')
    try {
        // converts ingredients Array to formatted string to insert into the URL
        const stringify = ingredients.toString()
        const formattedString = stringify.replaceAll(',','%2C%20')

        // Fetches recipe from Edamam API
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${formattedString}&app_id=${recipeAppId}&app_key=${recipeAppKey}`);
        const data = await response.json();

        //returns status to services
        res.status(200).json(data)


    } catch (err) {
        console.log('You got an error!: ');
        res.status(500).json({ message: "error fetching a recipe"})
    }
}

const RecipesController = {
    getRandomRecipes: getRandomRecipes
};

module.exports = RecipesController;

