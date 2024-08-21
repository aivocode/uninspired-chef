// Load environment variables from the /api/.env file
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const categoryKeywords = require("../lists/categoryKeywords")
const Pantry = require("../models/pantry");

const examplePantry = require("../lists/examplePantry")
const essentialsList = require("../lists/essentials")

const recipeAppId = process.env.RECIPE_APP_ID;
const recipeAppKey = process.env.RECIPE_APP_KEY;

const foodAppId = process.env.FOOD_APP_ID;
const foodAppKey = process.env.FOOD_APP_KEY;

// const Recipe = require("../models/recipe");
const { generateToken } = require("../lib/token");

const getRandomRecipes = async (req, res) => {
    const allIngredients = examplePantry; // Replace with actual pantry data
    let suggestionsArray = [];
    let hitRecipe = null;

    const categorizeIngredient = (ingredient) => {
        for (const category in categoryKeywords) {
            const keywords = categoryKeywords[category];
            if (keywords.some(keyword => ingredient.toLowerCase().includes(keyword))) {
                return category;
            }
        }
        return "others"; // Default category if no match is found
    };

    // Categorize the ingredients using the category keywords
    const categorisedIngredients = allIngredients.reduce((acc, ingredient) => {
        const category = categorizeIngredient(ingredient);
        // no category found then the category defaults to empty, which is other
        if (!acc[category]) acc[category] = [];
        //the category is pushed to the ingredient 
        acc[category].push(ingredient);
        //accumulator is returned
        return acc;
    }, {});

    console.log("These are our categorized ingredients: ", categorisedIngredients);

    // Here we are defining a function to pick a random ingredient from a category. Thanks GPT
    const pickRandomIngredient = (category) => {
        if (categorisedIngredients[category] && categorisedIngredients[category].length > 0) {
            const ingredients = categorisedIngredients[category];
            return ingredients[Math.floor(Math.random() * ingredients.length)];
        }
        return;
    };

    // Defining some variables to randomly select one ingredient from the desired category 
    const selectedProtein = pickRandomIngredient('protein');
    const selectedVegetable = pickRandomIngredient('vegetables');
    const selectedCarbohydrate = pickRandomIngredient('carbohydrates');

    // Combining selected random ingredients to form the initial search query
    let selectedIngredients = [selectedCarbohydrate, selectedVegetable, selectedProtein,].filter(Boolean);

    console.log("Selected Ingredients for Initial Query: ", selectedIngredients);

   // Now implementing a fallback so if we fail try removing an ingredient
    while (selectedIngredients.length > 0) {
    console.log("Trying with ingredients: ", selectedIngredients);

        try {
            // Convert the selected ingredients into a formatted query string
            const formattedString = selectedIngredients.toString().replaceAll(',', '%2C%20');
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${formattedString}&app_id=${recipeAppId}&app_key=${recipeAppKey}`);
            const data = await response.json();
            // console.log('Data received: ', data);

            // Process the search results
            if (data.count > 0) {
                data.hits.forEach(recipe => {
                    const recipeIngredients = recipe.recipe.ingredients.map(ingredient => ingredient.food.toLowerCase());
                    const filteredIngredients = recipeIngredients.filter(food => !essentialsList.includes(food));
                    // creates a missing ingredients array. 
                    const missingIngredients = filteredIngredients.filter(food => !allIngredients.includes(food));
                    // this creates a potential replacements ingredients array
                    const replacementIngredients = missingIngredients.flatMap(missing => {
                        return allIngredients.filter(ingredient => {
                            // Split both missing and pantry ingredients into words
                            const missingWords = missing.split(' ');
                            const ingredientWords = ingredient.split(' ');
            
                            // Check if any word in missing matches a word in the pantry ingredient
                            return missingWords.some(word => ingredientWords.includes(word));
                        });

                    });
                    console.log("missing ingredients: ", missingIngredients)
                    console.log("replacement ingredients: ", replacementIngredients)

                    // This was some generated code, the function is so that when we return to the front end
                    // we know which missing ingredient it has suggested a replacement with
                    const mappedReplacements = missingIngredients.map(missing => {
                        const replacement = replacementIngredients.find(ingredient => {
                            const missingWords = missing.split(' ');
                            const ingredientWords = ingredient.split(' ');
                            return missingWords.some(word => ingredientWords.includes(word));
                        });
                        return replacement ? `${missing} with ${replacement}` : null;
                    }).filter(Boolean); // Filter out any null values where no replacement was found
                    
                    // If we find that we can replace all the missing ingredients with a potential replacement
                    // then we push the recipe into hitRecipe
                    if (missingIngredients.length - mappedReplacements.length === 0) {
                        hitRecipe = recipe;
                        hitRecipe.suggestedReplacements = mappedReplacements;
                        return; // Exit the forEach loop
                    } else {
                        suggestionsArray.push({
                            recipe: recipe,
                            missingIngredients: missingIngredients,
                            missingCount: missingIngredients.length
                        });
                    }
                });

                if (hitRecipe) {
                    return res.status(200).json({ hit: hitRecipe, suggestions: [] });
                }
            }
        } catch (err) {
            console.log('Error occurred: ', err);
            return res.status(500).json({ message: "Error fetching a recipe" });
        }

    // If no results found, remove one ingredient and try again
    if (selectedIngredients.length > 1) {
        selectedIngredients.pop();
    } else {
        break;
    }
}

// Sort and return suggestions if no exact hit is found
suggestionsArray.sort((a, b) => a.missingCount - b.missingCount);
// console.log("Sorted suggestions: ", suggestionsArray);

if (suggestionsArray.length > 0) {
    res.status(200).json({ hit: null, suggestions: suggestionsArray });
} else {
    res.status(404).json({ message: "Couldn't find a recipe with your ingredients. You need to go shopping!" });
}
};

const RecipesController = {
getRandomRecipes: getRandomRecipes
};

module.exports = RecipesController;