const User = require('../models/user.model');

exports.loginUser = async (req, res) => {
  try {

  } catch (error) {

  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
    res.status(201);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};
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