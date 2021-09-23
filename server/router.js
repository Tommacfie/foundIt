const router = require('express').Router();
const itemController = require('./controllers/item.controller');
const userController = require('./controllers/user.controller');
const authenticate = require('./middlewares/auth');

router.post('/login', authenticate);
router.post('/register', userController.createUser);
router.get('/items', itemController.getItems);
router.post('/items', itemController.postItem);
router.delete('/items', itemController.deleteItem);

// DELETEME
router.get('/get', userController.getUser);

module.exports = router;