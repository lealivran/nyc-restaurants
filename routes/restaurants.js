var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');
var dateFormat = require('dateformat');
var now = new Date();

router.get('/:page', function(req, res, next) {
  Restaurant.paginate({}, {page:req.params.page, limit:50}, function (err, restaurants) {
    if (err) return handleError(err);
    res.render('restaurants/index', {title: 'Tous les restaurants', restaurants});
  })
});

router.get('/view/:id', function(req, res, next) {
  Restaurant.find({restaurant_id:req.params.id}, function (err, restaurant){
    if (err) console.log(err);
    console.log(restaurant.grades);
    res.render('restaurants/view', {title: 'Restaurant', restaurant});
  })
});

router.get('/borough/:borough', function(req, res, next) {
  Restaurant.paginate({ borough : req.params.borough}, {page:req.params.page, limit:50}, function (err, restaurants) {
    if (err) return handleError(err);
    res.render('restaurants/index', {title: 'Tous les restaurants', restaurants});
  })
});

module.exports = router;
