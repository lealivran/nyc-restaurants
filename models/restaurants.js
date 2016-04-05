const mongoose = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Restaurant', RestaurantsSchema);
