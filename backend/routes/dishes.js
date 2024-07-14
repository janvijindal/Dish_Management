// routes/dishes.js

const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');

// GET all dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new dish
router.post('/', async (req, res) => {
  const { dishName, imageUrl, isPublished } = req.body;
  try {
    const newDish = new Dish({ dishName, imageUrl, isPublished });
    await newDish.save();
    res.status(201).json(newDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT toggle isPublished status
router.put('/toggle/:id', async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    dish.isPublished = !dish.isPublished;
    const updatedDish = await dish.save();
    res.json(updatedDish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
