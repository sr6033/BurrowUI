const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.status(200).json({
    message: 'Welcome to the API'
  });
});

module.exports = api;
