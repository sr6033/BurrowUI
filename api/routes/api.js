const express = require('express');
const api = express.Router();
const burrow = require('./burrow/burrow');

api.get('/', (req, res) => {
    res.status(200).json({
    message: 'Welcome to the API'
  });
});

api.use('/burrow', burrow);

module.exports = api;
