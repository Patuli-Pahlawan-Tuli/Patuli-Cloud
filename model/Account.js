const mongoose = require('mongoose');

var date_time = new Date();

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

  imageUrl: {
    type: String,
    required: true,
  },

  createdAt: {
    type: String,
    default: date_time,
  },
  
});

const Account = mongoose.model('User', userSchema);

module.exports = Account;
