const mongoose = require('mongoose');

const dateTime = new Date();
let levelAccount = 1;
let expAccount = 0;
let quizComplete = 0;
let subQuizComplete = 0;

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

  completedSubQuiz: {
    type: Number,
    default: subQuizComplete,
  },

  completedQuiz: {
    type: Number,
    default: quizComplete,
  },

  createdAt: {
    type: String,
    default: dateTime,
  },

});

const Account = mongoose.model('User', userSchema);

module.exports = Account;
