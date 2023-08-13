const mongoose = require('mongoose');

// Create Product schema
const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number
},
{
  timestamps: true
})
productSchema.add({ category: {
  type: String,
  enum: {
    values: ['Fashion', 'Plumbing', 'Kitchen', 'Construction'],
    message: '{VALUE} is not supported!'
  }
}});


module.exports = mongoose.model('Product', productSchema);
