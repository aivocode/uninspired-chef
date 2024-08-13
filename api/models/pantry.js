const mongoose = require("mongoose");

const PantrySchema = new mongoose.Schema({
  // id of current logged in user to track pantry ownership
  userId: { type: String },
  // All our ingredients are stored in array
  ingredientsArray: { type: Array },
});

const Pantry = mongoose.model("Pantry", PantrySchema);

module.exports = Pantry;
