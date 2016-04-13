const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const RestaurantsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  borough: { type: String, required: true },
  grades: [{
    date: { type : Date, default : Date.now },
    grade: { type : String, default : '' },
    score: { type : Number, default : 0 },
  }],
  address: [{
    building: { type : String, default : '' },
    street: { type : String, default : '' },
    zipcode: { type : String, default : '' },
    coord: [{ type : Number, default : 0 }],
  }],
  restaurant_id: { type: String, required: true },
});

RestaurantsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Restaurant', RestaurantsSchema);
