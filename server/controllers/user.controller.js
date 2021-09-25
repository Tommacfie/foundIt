const bcrypt = require('bcrypt');
const User = require('../models/user.model');

exports.createUser = async (req, res) => {
  try {
    const email = req.body.email;
    if (await User.findOne({ email: email })) {
      return res.send('User already exists').status(400);
    }

    const password = req.body.password;
    req.body.password = await bcrypt.hash(password, 10);

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
