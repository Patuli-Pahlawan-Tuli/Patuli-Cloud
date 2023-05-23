const mongoose = require('mongoose');

const dateTime = new Date();

const lessonSchema = new mongoose.Schema({
  lessonName: {
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
