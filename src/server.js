'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('proof: LIFE!');
});






// app.use('*', (req, res, next) => {
//   res.status(404).send('Not found');
// });


const start = (port) => app.listen (port, () => console.log('listening on port:', port));

module.exports = { start, app };
