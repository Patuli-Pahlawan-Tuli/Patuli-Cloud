const httpStatus = require('http-status');
const Response = require('../model/Response');
const Lesson = require('../model/Lesson');

const getAllLesson = async (req, res) => {
  let response = null;
  try {
    const lessons = await Lesson.find();

    response = new Response.Success(false, 'success', lessons);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const getLessonByType = async (req, res) => {
  let response = null;
  const lessonTypeParams = req.params.lessonType;
  try {
    const lessons = await Lesson.find({'lessonType': lessonTypeParams});

    response = new Response.Success(false, 'success', lessons);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const getLessonByNumber = async (req, res) => {
  let response = null;
  const lessonTypeParams = req.params.lessonType;
  const numberParams = req.params.lessonNumber;
  try {
    const lessons = await Lesson.find({'lessonNumber': numberParams, 'lessonType': lessonTypeParams});

    if(lessons.length === 0) {
      response = new Response.Error(true, 'Lesson tidak ketemu');
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    response = new Response.Success(false, 'success', lessons);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getAllLesson, getLessonByType, getLessonByNumber };