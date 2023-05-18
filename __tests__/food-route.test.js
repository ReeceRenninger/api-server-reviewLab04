'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');

const request = supertest(app);

//COMMENTED THIS OUT SINCE IT WAS BREAKING ON MY SIDE WHEN TRYING TO BOOT UP
// beforeAll( async () = {
//   await sequelizeDatabase.sync();
// });
