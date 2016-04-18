var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurants');

/* GET home page. */
router.get('/', function(req, res, next) {
  Restaurant.aggregate([
    { $unwind: "$grades" },
    { $group : { _id: {name : "$name", cuisine:"$cuisine"} , average : { $avg: "$grades.score" } } },
    { $sort : { average : -1} },
    { $limit : 10 }
  ], function (err, restaurants){
    if (err) {
      console.log(err);
      return;
    }
    res.render('index', { title: 'Home' , restaurants : restaurants});
  });

});

module.exports = router;
