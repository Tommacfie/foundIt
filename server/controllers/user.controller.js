const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {
  console.log('controller LOGIN'); //DELETEME
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return res.send('LOGIN SUCCESS').status(200);
      } else {
        return res.send('INCORRECT PASSWORD').status(401);
      }
    } else {
      return res.send('USER DOESNT EXIST').status(400);
    };

  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

exports.createUser = async (req, res) => {
  try {
    const email = req.body.email;
    if (await User.findOne({ email: email })) {
      return res.send('User already exists').status(400);
    };

    let password = req.body.password;
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

//DELETEME
// {
//   "firstName": "Tom",
//     "lastName": "Macfie",
//       "email": "tom@macfie.com",
//         "password": "ajax"
// }
// {
//   "firstName": "Pat",
//     "lastName": "Smela",
//       "email": "pat@smela.com",
//         "password": "neko"
// }
// {
//   "firstName": "Kasia",
//     "lastName": "Kowalska",
//       "email": "kasia@kowalska.com",
//         "password": "bazy"
// }
// {
//     "firstName": "Kamil",
//       "lastName": "Smela",
//         "email": "kamil@smela.com",
//           "password": "neko"
// }