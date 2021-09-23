const mongoose = require('./index');

const Schema = mongoose.Schema;

const itemModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  brandModel: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: 'No image provided'
  },
  whereFound: {
    type: String,
    required: true,
  },
  lostFound: {
    type: Boolean,
    required: true,
  },
  submitted_by: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', itemModel);

module.exports = Item;