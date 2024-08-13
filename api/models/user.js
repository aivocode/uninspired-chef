const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  favourites: { type: Array, required: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
