const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product: {
    name: String,
    description: String,
    price: Number,
    image: [String],
    brand: String,
    category: String,
    specs: {
      cores: Number,
      threads: Number,
      base_clock: String,
      boost_clock: String,
      tdp: String,
      cache: String,
      socket: String,
      integrated_graphics: Boolean,
      interface: String,
      memory: String,
      core_clock: String,
      cooling: String,
      power_supply: String,
      dimensions: String
    }
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
