// We import api ids and keys from .env in backend
const foodAppId = process.env.FOOD_APP_ID;
const foodAppKey = process.env.FOOD_APP_KEY;

const Pantry = require("../models/pantry");

const createPantry = async (req, res) => {
  // array that holds all ingredients from request body
  const ingredientsArray = req.body.ingredientsArray;

  // array where we store wrong ingredients that do not exists in Edamam API
  const notIngredients = [];

  // Loop through array to check each inredient
  for (let i = 0; i < ingredientsArray.length; i++) {
    // run fetch request for ingredient while importing app id and app key
    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${foodAppId}&app_key=${foodAppKey}&ingr=${ingredientsArray[i]}&nutrition-type=cooking`
    );
    // convert it to readable format
    const data = await response.json(response);
    // console.log(data.parsed);
    // if API returns "[]", empty array, we add that ingredient to notIngredients because it was not found
    if (data.parsed.length === 0) {
      notIngredients.push(ingredientsArray[i]);
    }
  }

  // console.log(notIngredients);
  // check if there is anything in notIngredients and construct error message
  if (notIngredients.length !== 0) {
    let message = "";
    // loop through notIngredients array so we can merge strings from there
    for (let i = 0; i < notIngredients.length; i++) {
      // and this is where we merge string
      message += `${notIngredients[i]}, `;
    }
    // remove two last chars, so message ends without ", "
    message = message.slice(0, -2);
    // response to our service on frontend if not valid ingredients found
    res.status(404).json({
      message: `Ingredients not available in database: ${message}. Try again.`,
    });
  } else if (notIngredients.length === 0) {
    // we create new Pantry in Mongo since we passed check that all ingredients are correct
    const pantry = new Pantry({
      userId: req.body.userId,
      ingredientsArray: req.body.ingredientsArray,
    });
    pantry.save();

    // response to our service on frontend if Pantry was created in Mongo
    res
      .status(200)
      .json({ message: `Pantry created with all ingredients specified.` });
  }
};

const PantryController = {
  createPantry: createPantry,
};

module.exports = PantryController;
