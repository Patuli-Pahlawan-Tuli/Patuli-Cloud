const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    minlength: 8,
    maxlength: 20,
  },

  // imageUrl: {
  //   type: String,
  //   required: true,
  // },

  createdAt: {
    type: String,
    default: Date.now,
  },
});

const account = mongoose.model('User', userSchema);

module.exports = account;