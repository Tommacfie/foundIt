const UserModel = require('./models/user.model');

const usersArray = [
  {
    firstName: 'Tom',
    lastName: 'Macfie',
    email: 'c@c.com',
    password: 'ajax',
  },
  {
    firstName: 'Chris',
    lastName: 'Macfie',
    email: 'cm@cm.com',
    password: 'everton',
  },
  {
    firstName: 'Kat',
    lastName: 'Kowalska',
    email: 'k@k.com',
    password: 'bazy',
  },
  {
    firstName: 'Sam',
    lastName: 'Andrus',
    email: 's@s.com',
    password: 'miri',
  },
];

const addUsers = async () => {
  try {
    for await (const user of usersArray) {
      UserModel.create(user);
    }
  } catch (error) {
    return error;
  }
};

addUsers();
