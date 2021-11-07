const Item = require('../models/item.model');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
  return;
};

exports.postItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.send(item);
    res.status(201);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
  return;
};

exports.deleteItem = async (req, res) => {
  try {
    const itemId = req.body._id;
    const item = await Item.findByIdAndDelete({ _id: itemId });
    res.send(item);
    res.status(204);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
  return;
};
