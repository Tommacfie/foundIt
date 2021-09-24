const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { accessTokenString, accessTokenStringRefresh } = require('../config')
const refreshTokens = [];

exports.authenticate = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const validatePassword = await bcrypt.compare(req.body.password, user.password);

      if (validatePassword) {
        const accessToken = jwt.sign(
          { userId: user._id }, accessTokenString,
          { expiresIn: '5m' });
        const refreshToken = jwt.sign({ userId: user._id }, accessTokenStringRefresh);

        refreshTokens.push(refreshToken);

        res.json({ accessToken, refreshToken });
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
      const token = authHeader && authHeader.split(' ')[1];

      jwt.verify(token, accessTokenString, (error, user) => {
        if (error) return res.status(403).send('Invalid token');

        req.user = user;
        next();
      });
    } else {
      res.status(401).send('Unauthorised access');
    }
  } catch (error) {
    res.send(error)
    res.status(500);
  }
};

exports.logout = async (req, res, next) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter(t => t !== token);
  res.send('Logged out');
}