const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    maxlength: 256,
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

const Account = mongoose.model('User', userSchema);

module.exports = Account;
