// Load environment variables from the /api/.env file
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const recipeAppId = process.env.RECIPE_APP_ID;
const recipeAppKey = process.env.RECIPE_APP_KEY;

// const Recipe = require("../models/recipe");
const { generateToken } = require("../lib/token");

// Populates an array with random ingredients for our call to the recipe API
const ingredients = ['red kidney beans', 'chicken', 'rice', 'tomatoes']

// converts ingredients Array to formatted string to insert into the URL
const stringify = ingredients.toString()
const formattedString = stringify.replaceAll(',','%2C%20')
console.log("this is our formatted string: ", formattedString)


console.log("This is the URL: ", `https://api.edamam.com/api/recipes/v2?type=public&q=p=${formattedString}&app_id=${recipeAppId}&app_key=${recipeAppKey}`)

const getRecipes = async (req, res) => {
    try {
        console.log('attempting to fetch: ')
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${formattedString}&app_id=${recipeAppId}&app_key=${recipeAppKey}`);
        const data = await response.json();
        console.log(data['hits'][0]['recipe']['label'])
        return data['hits'][0]['recipe']['ingredients'];

    } catch {
        console.log('You got an error!: ');
        return null;
    }
}

getRecipes().then(data => console.log(data)).catch(error => console.error('Error:', error));

const RecipesController = {
    getRecipes: getRecipes
};

module.exports = RecipesController;


// const getFavouritedRecipes = null


// const likeRecipe = null

// const post = async (req, res) => {
//     try {
//         const postId = req.params.id;  // Get the post ID from the request parameters
//         const post = await Post.findById(postId); 

//     if (!post) {
//         return res.status(404).json({ error: 'Post not found' });
//     }

//         const token = generateToken(req.user_id); 
//         res.status(200).json({ post: post, token: token }); 
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred while fetching the post' });
//     }
//   };

