const express = require('express');
const router = express.Router();
const db = require('../models');

const getOptimizelyClient = require('../../config/optimizely');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {

  // Optimizely SDK Helpers
  const o = getOptimizelyClient();
  const exp = 'HOME_PAGE_HERO_TEST';
  const user = [req.cookies.userid, {/*attributes*/}];

  // Determine if we should show the hero
  const variation = o.activate(exp, ...user);

  console.log('STUFF:', req.cookies.userid, variation);

  // Pass final args to html
  res.render('index', { 
    title: 'MailChimp Demo',
    shouldShowHero: (variation === 'show') ? true : false
  });

});


router.get('/discover', (req, res, next) => {
  
  // Optimizely SDK Helpers
  const o = getOptimizelyClient();
  const user = [req.cookies.userid, {/*attributes*/}];

  // Track reaching the next step
  o.track('DISCOVER_PAGEVIEW', ...user);

});