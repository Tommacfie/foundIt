import { Router } from "express";
const router = Router();

import { getItems, postItem, deleteItem } from "./controllers/item.controller";
import { getUser, createUser } from "./controllers/user.controller";
const auth = require("./middlewares/auth");

router.post("/login", auth.authenticate);
router.post("/logout", auth.logout);
router.post("/token");
router.post("/register", createUser);
router.get("/items", auth.authorise, getItems);
router.post("/items", auth.authorise, postItem);
router.delete("/items", auth.authorise, deleteItem);

router.get("/test/users", getUser);
router.get("/test/items", getItems);
router.post("/test/items", postItem);

export default router;
