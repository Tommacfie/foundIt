const Item = require('../models/item.model');

exports.getItems = async (req, res) => {
  try {
    // console.log(req.body, 'items GET');
    const items = await Item.find();
    // console.log(items, 'items GET');
    res.send(items);
    res.status(200);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

exports.postItem = async (req, res) => {
  try {
    console.log(req.body, 'items POST');
    const { title, description, brandModel, image, whereFoundOrLost, lostOrFound, submittedBy } = req.body;
    const postItem = await Item.create(req.body);
    console.log(postItem, 'post');

  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

exports.deleteItem = async (req, res) => {
  try {
    console.log(req.body, 'items DELETE');

  } catch (error) {
    res.send(error);
    res.status(500);
  }
};

// {
//   "title":
//   "description":
//   "brandModel":
//   "image":
//   "where":
//   "lostFound":
//   "submittedBy":
// }