const mongoose = require('mongoose');

const dateTime = new Date();

const quizSchema = new mongoose.Schema({
  quizNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  quiz: {
    type: String,
    required: true,
  },

  quizDifficulty: {
    type: String,
    required: true,
  },

  answer: {
    type: String,
    required: true,
  },
  
  createdAt: {
    type: String,
    default: dateTime,
  },

});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
