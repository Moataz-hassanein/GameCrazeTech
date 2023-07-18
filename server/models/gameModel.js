const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gameSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  genre: {
    type: [String],
    required: true
  },
  image: {
    type: [String],
    required: true
  },
  minimum_requirements: {
    os: {
      type: String,
      required: true
    },
    processor: {
      type: String,
      required: true
    },
    memory: {
      type: String,
      required: true
    },
    graphics: {
      type: String,
      required: true
    },
    storage: {
      type: String,
      required: true
    }
  },
  recommended_requirements: {
    os: {
      type: String,
      required: true
    },
    processor: {
      type: String,
      required: true
    },
    memory: {
      type: String,
      required: true
    },
    graphics: {
      type: String,
      required: true
    },
    storage: {
      type: String,
      required: true
    },
    directx: {
    type: String   
    }
  }
});

const Game  = mongoose.model('Game', gameSchema);

 module.exports = Game;