const User = require("../models/user");
const create = (req, res) => {
  const fullName = req.body.fullName;
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const favouritedRecipes = req.body.favouritedRecipes;

  // Checking if user name already exists in the Mongo database
  User.findOne({ userName: req.body.userName }).then((data) => {
    if (data !== null) {
      res
        .status(409)
        .json({ message: "User with user name provided already exists" });
    }
    if (data === null) {
      const user = new User({
        fullName,
        userName,
        email,
        password,
        favouritedRecipes,
      });
      user
        .save()
        .then((user) => {
          console.log("User created, id:", user._id.toString());
          res.status(201).json({ message: "OK" });
        })
        .catch((err) => {
          console.error(err);
          res.status(400).json({ message: "Something went wrong" });
        });
    }
  });
};
const UsersController = {
  create: create,
};
module.exports = UsersController;
