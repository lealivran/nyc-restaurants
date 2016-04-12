var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');

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
    // console.log('%s', restaurant)
    res.render('restaurants/view', {title: 'Restaurant', restaurant});
  })
});

module.exports = router;
