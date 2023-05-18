'use strict';

const express = require('express');
const { clothesModel } = require('../models');
const router = express.Router();

router.get('/cItem', async (req, res, next) => {
  const orders = await clothesModel.findAll();
  res.status(200).send(orders);
});

router.post('/order', async (req, res, next) => {
  const newCItem = await clothesModel.create();

  res.status(200).send(newCItem);
});

router.delete('/order/:id', async (req, res, next) => {
  try {
    const deleteCItem = await clothesModel.findByPk(req.params.id);  //findbypk or id? my choice?


  }catch(e){
    next(e);
  }
});

module.exports = router;
