'use strict';

const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const foodRouter = require('./routes/food');
// const clothesRouter = require('./routes/clothes')

const app = express();

app.use(cors());
app.use(express.json());

app.use(foodRouter);
// app.use(clothesRouter)
app.get('/', (req, res, next) => {
  res.status(200).send('proof: LIFE!');
});

// app.use('*', (req, res, next) => {
//   res.status(404).send('Not found');
// });

//!! use at bottom of server to be final catches for errors
app.use('*', notFound); // 404 handler
app.use(errorHandler); // 500 handler

const start = (port) => app.listen (port, () => console.log('listening on port:', port));

module.exports = { start, app };
