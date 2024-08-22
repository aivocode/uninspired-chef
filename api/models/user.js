const mongoose = require("mongoose");
const { RecipeSchema } = require('./recipe'); //importing the recipe schema

// Fields to be in the database
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  favouritedRecipes: [RecipeSchema], //array of Recipe subdocuments (i.e. recipe objects from Edamam API that we've saved)
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
