' use strict';

const express = require('express');
const router = express.Router();
const { foodModel } = require('../models/food'); //need food on path end?

router.get('/food', async (req, res, next) => {
    let foods = await  foodModel.findAll();
    res.status(200).send(foods);
}) ;