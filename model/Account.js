const mongoose = require('mongoose');

const dateTime = new Date();
let levelAccount = 1;
let expAccount = 1;
let questionComplete = 0;

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

  accountLevel: {
    type: Number,
    default: levelAccount,
  },

  accountExp: {
    type: Number,
    default: expAccount,
  },

  completedQuestion: {
    type: Number,
    default: questionComplete,
  },

  createdAt: {
    type: String,
    default: dateTime,
  },

});

const Account = mongoose.model('User', userSchema);

module.exports = Account;
