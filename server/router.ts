import { Router } from "express";
const router = Router();

import { getItems, postItem, deleteItem } from "./controllers/item.controller";
import { getUser, createUser } from "./controllers/user.controller";
import { authenticate, logout } from "./middlewares/auth";

router.post("/login", authenticate);
router.post("/logout", logout);
router.post("/token");
router.post("/register", createUser);
router.get("/items", getItems);
router.post("/items", postItem);
router.delete("/items", deleteItem);

router.get("/test/users", getUser);
router.get("/test/items", getItems);
router.post("/test/items", postItem);

export default router;
