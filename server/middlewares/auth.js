const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const accessTokenSecret = 'theSecretAccessToken';

exports.authenticate = async (req, res, next) => {
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
        res.status(401);
        res.send('Invalid Password');
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

exports.authorise = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (error, user) => {
        if (error) {
          return res.status(403).send('Invalid token');
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).send('Unauthorised acces');
    }
  } catch (error) {
    res.send(error)
    res.status(500);
  }
};