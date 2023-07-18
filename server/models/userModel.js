const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    trim: true,
  },
  password: {
    type: String,
    //required: true,
    minLength: 3,
  }
});

UserSchema.methods.getPublicFields = function () {
    return {
      fullName: this.fullName,
      age: this.age,
      email: this.email,
      _id: this._id,
    };
  };

module.exports = mongoose.model('User', UserSchema);
