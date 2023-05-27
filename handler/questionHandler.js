const httpStatus = require('http-status');
const Response = require('../model/Response');
const Question = require('../model/Question');

const getAllQuestion = async (req, res) => {
  let response = null;
  try {
    const questions = await Question.find();

    response = new Response.Success(false, 'success', questions);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

// const getQuestion = async (req, res) => {
//   let response = null;
//   const idParams = req.params._id;
//   try {
//     const questions = await Question.findOne({'_id': idParams});

//     if(!questions) {
//       response = new Response.Error(true, 'Pertanyaan Tidak Ketemu');
//       res.status(httpStatus.BAD_REQUEST).json(response);
//       return;
//     }

//     response = new Response.Success(false, 'success', questions);
//     res.status(httpStatus.OK).json(response); 
//   } catch (error) {
//     response = new Response.Error(true, error.message);
//     res.status(httpStatus.BAD_REQUEST).json(response);
//   }
// };

const getQuestionByDifficulty = async (req, res) => {
  let response = null;
  const diffParams = req.params.questionDifficulty;
  try {
    const questions = await Question.find({'questionDifficulty': diffParams});

    if(!questions) {
      response = new Response.Error(true, 'Pertanyaan Tidak Ketemu');
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    response = new Response.Success(false, 'success', questions);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const getQuestionByNumber = async (req, res) => {
  let response = null;
  const numberParams = req.params.questionNumber;
  try {
    const questions = await Question.find({'questionNumber': numberParams});

    if(!questions) {
      response = new Response.Error(true, 'Pertanyaan Tidak Ketemu');
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    response = new Response.Success(false, 'success', questions);
    res.status(httpStatus.OK).json(response); 
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { getAllQuestion, getQuestionByDifficulty, getQuestionByNumber };