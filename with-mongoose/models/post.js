const mongoose = require('mongoose');

const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

module.exports = mongoose.model(
  'Post',
  new Schema({
    title: String,
    content: String
  })
);
