const mongoose = require('./index');

const { Schema } = mongoose;

const itemModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: 'No image provided',
  },
  location: {
    type: String,
    required: true,
  },
  lostOrFound: {
    type: Boolean,
    required: true,
  },
  submittedBy: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('Item', itemModel);

module.exports = Item;
