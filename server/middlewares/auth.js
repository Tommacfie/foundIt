const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const accessTokenSecret = 'theSecretAccessToken';

const auth = async (req, res, next) => {
  console.log('AUTH');
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const accessToken = jwt.sign({ userId: user._id }, accessTokenSecret);
      res.json({ accessToken });
    } else {
      res.send("User doesn't exist")
    }
  } catch (error) {
    res.send(error);
    res.status(500);
  }
  next();
};

module.exports = auth;