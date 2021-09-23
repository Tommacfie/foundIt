const router = require('express').Router();
const itemController = require('./controllers/item.controller');
const userController = require('./controllers/user.controller');

router.get('/items', itemController.getItems);
router.post('/items', itemController.postItem);
router.delete('/items', itemController.deleteItem);
router.post('/login', userController.loginUser);
router.post('/register', userController.createUser);
router.get('/get', userController.getUser);

module.exports = router;