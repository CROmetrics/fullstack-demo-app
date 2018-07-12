const express = require('express');
const router = express.Router();
const db = require('../models');

const getOptimizelyClient = require('../../config/optimizely');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {

  res.render('index', { /* options */ });

});


router.get('/discover', (req, res, next) => {

  res.render('discover', { /* options */ });

});