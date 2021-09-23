const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const accessTokenSecret = 'theSecretAccessToken';

const authenticate = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const validatePassword = await bcrypt.compare(req.body.password, user.password);
      if (validatePassword) {
        const accessToken = jwt.sign({ userId: user._id }, accessTokenSecret);
        res.json({ accessToken });
        res.status(200);
        next();
      } else {
        res.send('Invalid Password');
        res.status(401);
      }
    } else {
      res.status(404);
      res.send("User doesn't exist");
    }
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

module.exports = authenticate;