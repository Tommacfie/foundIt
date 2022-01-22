import bcrypt from "bcrypt";
import User from "../models/user.model";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password)
      return res.send({ message: "Please fill out all fields" }).status(400);
    if (await User.findOne({ email: email }))
      return res
        .send({ message: "An account with this email address already exists" })
        .status(400);

    req.body.password = await bcrypt.hash(password, 10);
    const newUser = await User.create(req.body);
    res.send(newUser);
    res.status(201);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

// This function is used for testing only
// It bypasses the JWT authentication and allows you to view all users in the database
export const getUser = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send(users);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};
