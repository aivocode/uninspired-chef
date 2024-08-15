const mongoose = require("mongoose");

// Fields to be in the database
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  favouritedRecipes: { type: Array, default: [] },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
