' use strict';

const express = require('express');

const router = express.Router();
const { foodModel } = require('../models/index'); // changed import to directly go to index.js

//find all food
router.get('/food', async (req, res, next) => {
  let foods = await  foodModel.findAll(); // 90 was here by accident fixed

  res.status(200).send(foods);
});

//find one food item
router.get('/food/:id', async (req, res, next) => {
  let singleFood = await foodModel.findByPk(req.params.id); //where clause useful for update

  res.status(200).send(singleFood);
});

//create new food item
router.post('/food', async (req, res, next) => {
  let newFood = await foodModel.create(req.body);

  res.status(200).send(newFood);
});

module.exports = router;
