const mongoose = require('mongoose');

const dateTime = new Date();

const lessonSchema = new mongoose.Schema({
  lessonNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  lessonName: {
    type: String,
    required: true,
  },

  lessonType: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  
  createdAt: {
    type: String,
    default: dateTime,
  },

});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
