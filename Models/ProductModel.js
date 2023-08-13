const mongoose = require('mongoose');

// Create Product schema
const productSchema = new Schema({
  name: String,
  quantity: Number,
  price: Number,
  date_created: {
    type: Date,
    default: () => (new Date()) // set the current time as a default value for this field when creating an entry in MongoDB.
  }
})

module.exports = mongoose.model('Product', productSchema);
