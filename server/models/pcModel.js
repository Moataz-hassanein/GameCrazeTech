const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: [String],
    required: true
  }
});

const Pc  = mongoose.model('Pc', pcSchema);

module.exports = Pc;

