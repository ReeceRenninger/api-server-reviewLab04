'use strict';

const { Sequilize, DataTypes } = require('sequelize');
const food = require('./food');

const DATABASE_URL = new Sequelize(DATABASE_URL);

const foodModel = food(SequilizerDatabase, DataTypes);

module.exports = { SequilizerDatabase, foodModel };
