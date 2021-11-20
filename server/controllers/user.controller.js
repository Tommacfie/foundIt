const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password)
      return res.send({ message: "Please fill out all fields" }).status(400);
    if (await User.findOne({ email: email }))
      return res.send({ message: "User already exists" }).status(400);

    req.body.password = await bcrypt.hash(password, 10);
    const newUser = await User.create(req.body);
    res.send(newUser);
    res.status(201);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

// This route is used for testing only
// It bypasses the JWT authentication and allows you to view all users in the database
exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};
