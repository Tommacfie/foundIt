import Item from "../models/item.model";

import { Request, Response } from "express";

export const getItems = async (_req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.send(items);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

export const postItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.create(req.body);
    res.send(item);
    res.status(201);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.body._id;
    const item = await Item.findByIdAndDelete({ _id: itemId });
    res.send(item);
    res.status(204);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};
