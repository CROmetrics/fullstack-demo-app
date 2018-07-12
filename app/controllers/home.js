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
  const exp = 'HOME_PAGE_HERO';
  const user = [req.cookies.userid, {/*attributes*/}];

  // Determine if we should show the hero and with what options
  const shouldShowHero = o.isFeatureEnabled(exp, ...user);
  const h1 = o.getFeatureVariableString(exp, 'h1', ...user);
  const h2 = o.getFeatureVariableString(exp, 'h2', ...user);
  const cta = o.getFeatureVariableString(exp, 'cta', ...user);
  const img = o.getFeatureVariableString(exp, 'img', ...user);

  // Pass final args to html
  res.render('index', {
    shouldShowHero, h1, h2, cta, img,
  });

});


router.get('/discover', (req, res, next) => {

  // Optimizely SDK Helpers
  const o = getOptimizelyClient();
  const user = [req.cookies.userid, {/*attributes*/}];

  // Track reaching the next step
  o.track('DISCOVER_PAGEVIEW', ...user);

  res.render('discover');

});