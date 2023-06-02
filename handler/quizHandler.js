const httpStatus = require('http-status');
const Response = require('../model/Response');
const Quiz = require('../model/Quiz');

const getAllQuiz = async (req, res) => {
  let response = null;
  try {
    const quizzes = await Quiz.find();

    response = new Response.Success(false, 'success', quizzes);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const getQuizByDifficulty = async (req, res) => {
  let response = null;
  const diffParams = req.params.quizDifficulty;
  try {
    const quizzes = await Quiz.find({'quizDifficulty': diffParams});

    if(!quizzes) {
      response = new Response.Error(true, 'Pertanyaan Tidak Ketemu');
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    response = new Response.Success(false, 'success', quizzes);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const getQuizByNumber = async (req, res) => {
  let response = null;
  const numberParams = req.params.quizNumber;
  try {
    const quizzes = await Quiz.find({'quizNumber': numberParams});

    if(!quizzes) {
      response = new Response.Error(true, 'Pertanyaan Tidak Ketemu');
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    response = new Response.Success(false, 'success', quizzes);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getAllQuiz, getQuizByDifficulty, getQuizByNumber };