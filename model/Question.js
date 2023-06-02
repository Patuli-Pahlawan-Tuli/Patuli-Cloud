const mongoose = require('mongoose');

const dateTime = new Date();

const questionSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  question: {
    type: String,
    required: true,
  },

  questionDifficulty: {
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

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
