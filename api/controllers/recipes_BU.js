// Load environment variables from the /api/.env file
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const Pantry = require("../models/pantry");

const recipeAppId = process.env.RECIPE_APP_ID;
const recipeAppKey = process.env.RECIPE_APP_KEY;

const foodAppId = process.env.FOOD_APP_ID;
const foodAppKey = process.env.FOOD_APP_KEY;

// const Recipe = require("../models/recipe");
const { generateToken } = require("../lib/token");


/* 

At the moment the code does not look to see if the ingredients in our pantry match exactly what is 
in the recipe api. In order to do this we're going to have to make some assumptions about the persons 
pantry.

First I think we should exclude things like salt, pepper, spices and oils (butter, olive oil etc). 
In order to do this we should probably have an 'essentials' category that we assume the person has and 
ignore these.

Next, as each fetch request gives us a series of hits, we can go into each of those hits and compare 
the ingredients on that list to the ingredients in our pantry. If we get an exact match then that is the
recipe we present. Otherwise we add it to an empty array. This array should be ordered based on fewest unmatching 
ingredients. 

TODO:

Create essentials list 
    Break down the ingredients and hopefully find a category key value which can 
    speed this along

Search each hit for ingredients
    Once data.count != 0, we scan through the ingredients of each 'hit' 

Remove essentials
    We remove or ignore any ingredient in the recipe that matches our essentials list

Check for matching ingredients
    We compare what's in our pantry to the pared down recipe list adding recipes that don't match perfectly
    to a new 'suggestions array' - it would also be nice to return what ingredients are missing.

Return matching recipe 
    We return the first recipe with an exact match. It may be possible to randomise this if we have multiple 
    matches

Return suggestions array
    If we can't find any matches, we return the array of suggestions. This should be ordered by the fewest
    non matching ingredients.


*/



const getRandomRecipes = async (req, res) => {
    

    const pantry = await Pantry.findOne({ user_id: '66b50d1969615f1c46aa93ab'});
    const allIngredients = pantry.ingredientsArray.map(ingredient => ingredient.label);

    // randomly selects 5 ingredients from our pantry
    const ingredients = allIngredients.sort(() => 0.5 - Math.random()).slice(0, 5);
    console.log(ingredients)

    try {
        // initialises the count value with the loop
        let data = { count: 0 } 

        while (data.count === 0 && ingredients.length > 0) {
            console.log('Initialising loop...')
            // converts ingredients Array to formatted string to insert into the URL
            const formattedString = ingredients.toString().replaceAll(',','%2C%20');

            // fetches data from Edamam API 
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${formattedString}&app_id=${recipeAppId}&app_key=${recipeAppKey}`);
            console.log(`https://api.edamam.com/api/recipes/v2?type=public&q=${formattedString}&app_id=${recipeAppId}&app_key=${recipeAppKey}`)
            data = await response.json();
            console.log('this is the data: ', data)

            //if statement to check the value of count (hits for combination). If 0 then we remove a random ingredient and then go again
            if (data.count === 0) {

                // chatGPT generated code to initialise a randomIndex that 
                // we will use to remove one ingredient from the array
                const randomIndex = Math.floor(Math.random() * ingredients.length)
                ingredients.splice(randomIndex, 1);
            }
        }

        // Once we get a hit, we return the data. 
        if (data.count > 0) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: "Couldn't find a recipe with your ingredients. You need to go shopping!"})
        }
    } catch (err) {
        console.log('You got an error!: ');
        res.status(500).json({ message: "error fetching a recipe"})
    }
}

const RecipesController = {
    getRandomRecipes: getRandomRecipes
};

module.exports = RecipesController;




