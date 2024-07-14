// models/Dish.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  dishName: { type: String, required: true },
  imageUrl: { type: String },
  isPublished: { type: Boolean, default: false },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
