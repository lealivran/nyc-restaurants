var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');

/* GET restaurants listing. */
router.get('/', function(req, res, next) {

  Restaurant.find(function (err, restaurants) {
    if (err) return handleError(err);
    console.log('%s', restaurants)
  })

  res.render('restaurants/index', {title: 'Restaurants'});
});

module.exports = router;
