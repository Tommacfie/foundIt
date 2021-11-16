const router = require("express").Router();
const itemController = require("./controllers/item.controller");
const userController = require("./controllers/user.controller");
const auth = require("./middlewares/auth");

router.post("/login", auth.authenticate);
router.post("/logout", auth.logout);
router.post("/token");
router.post("/register", userController.createUser);
router.get("/items", auth.authorise, itemController.getItems);
router.post("/items", auth.authorise, itemController.postItem);
router.delete("/items", auth.authorise, itemController.deleteItem);

router.get("/test/users", userController.getUser);
router.get("/test/items", itemController.getItems);
router.post("/test/items", itemController.postItem);
module.exports = router;
