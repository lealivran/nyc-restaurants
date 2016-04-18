var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');
var dateFormat = require('dateformat');
var now = new Date();

/* GET restaurants listing. */
router.get('/:page', function(req, res, next) {
  Restaurant.paginate({}, {page:req.params.page, limit:50}, function (err, restaurants) {
    if (err) return handleError(err);
    // console.log('%s', restaurants)
    res.render('restaurants/index', {title: 'Tous les restaurants', restaurants});
  })
});

router.get('/view/:id', function(req, res, next) {
  Restaurant.find({restaurant_id:req.params.id}, function (err, restaurant){
    if (err) console.log(err);
    var date_auj = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    console.log('%s', restaurant);
    console.log('%s', restaurant.restaurant_id);
    res.render('restaurants/view', {title: 'Restaurant', restaurant});
  })
});

module.exports = router;
