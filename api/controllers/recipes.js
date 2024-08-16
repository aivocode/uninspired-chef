// Load environment variables from the /api/.env file
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const recipeAppId = process.env.RECIPE_APP_ID;
const recipeAppKey = process.env.RECIPE_APP_KEY;
const Pantry = require("../models/pantry");
const { Recipe } = require("../models/recipe"); // importing the Recipe model
const User = require("../models/user"); // importing the User model
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

const addRecipeToFavourites = async (req, res) => {

    try {
        //find the user by their ID
        const user = await User.findById(req.user_id);

        //create a new recipe object
        const newFavouriteRecipe = new Recipe ({ recipe: req.body.recipe }); 

        //check recipe object isn't already included in favouriteRecipes array - three steps:

        //step 1 - create function that compares two objects:
        const areObjectsEqual = (object1, object2) => {

            //checks if the objects have the same number of keys
            const object1Keys = Object.keys(object1);
            const object2Keys = Object.keys(object2);

            if (object1Keys.length !== object2Keys.length) {
                return false;
            }

            //then checks if every key in object1 exists in object2 and has the same value

            return object1Keys.every(key => object2.hasOwnProperty(key) && object1[key] === object2[key]);
        };

        //step 2 - create function which iterates through an array and compares each existing object in the array against the new object, by applying the above function:

        const checkIfObjectAlreadyIncludedInArray = (objectArray, newObject) => {
            return objectArray.some(existingObject => areObjectsEqual(existingObject, newObject));
        };

        //step 3 - apply above function to user's favouritedRecipes array to see if the recipe is already included in favourites

        const recipeAlreadyInFavourites = checkIfObjectAlreadyIncludedInArray(user.favouritedRecipes, newFavouriteRecipe)

        //if recipe has already been favourited, return a response confirming this

        if (recipeAlreadyInFavourites) {
            return res.status(400).json({message: 'Recipe has already been favourited!'});
        }

        //if recipe hasn't been favourited, add the new recipe to the user's favouritedRecipes array
        user.favouritedRecipes.push(newFavouriteRecipe); 
        await user.save();

        //send a response confirming action
        res.status(200).json({ message: 'Recipe added to favourites!'});

    } catch (err) {
        console.error(error);
        res.status(500).json( {message: 'Something went wrong - unable to add recipe to favourites.'})
    }
};

const removeRecipeFromFavourites = async (req, res) => {
    try {
        //find the user by their ID
        const user = await User.findById(req.user_id);

        //create a new recipe object
        const recipeToBeRemoved = new Recipe ({ recipe: req.body.recipe }); 

        //find index of recipe object in array

        //step 1 - create function that compares two objects:
        const areObjectsEqual = (object1, object2) => {

            //checks if the objects have the same number of keys
            const object1Keys = Object.keys(object1);
            const object2Keys = Object.keys(object2);

            if (object1Keys.length !== object2Keys.length) {
                return false;
            }

            //then checks if every key in object1 exists in object2 and has the same value

            return object1Keys.every(key => object2.hasOwnProperty(key) && object1[key] === object2[key]);
        };

        //step 2 - create function which iterates through an array and returns index of recipe that is to be deleted (by applying above function)

        const findRecipeIndexInArray = (objectArray, targetObject) => {
            return objectArray.findIndex(existingObject => areObjectsEqual(existingObject, targetObject));
        };

        //step 3 - apply above function to user's favouritedRecipes array to find index of recipe that is to be deleted

        const recipeIndex = findRecipeIndexInArray(user.favouritedRecipes, recipeToBeRemoved)

        //if recipe is not found (i.e. -1 is returned), return a response flagging this

        if (recipeIndex === -1) {
            return res.status(404).json({message: 'Recipe not in favourites!'})
        }

        //if recipe index is found, remove it from user's favouritedRecipes array
        user.favouritedRecipes.splice(recipeIndex, 1); //splice method takes 2 args: index to start removing from, number of elements to remove i.e. 1 in this case
        await user.save();

        //send a response confirming action
        res.status(200).json({ message: 'Recipe removed from favourites.'});

    } catch (err) {
        console.error(error);
        res.status(500).json( {message: 'Something went wrong - unable to remove recipe from favourites.'})
    }
}

const RecipesController = {
    getRandomRecipes: getRandomRecipes,
    addRecipeToFavourites: addRecipeToFavourites,
    removeRecipeFromFavourites: removeRecipeFromFavourites
};

module.exports = RecipesController;