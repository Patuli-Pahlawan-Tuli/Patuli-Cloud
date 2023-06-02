const httpStatus = require('http-status');
const Response = require('../model/Response');
const Account = require('../model/Account');
// const Question = 

const updateExp = async (req, res) => {
  let response = null;

  try {
    const accountId = req.currentUser._id;
    const request = req.body;
    const bodyAccountExp = request.newExp;

    await Account.findByIdAndUpdate(accountId, { $inc:{ accountExp: bodyAccountExp } });

    response = new Response.Success(false, 'Exp updated successfully');
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const updateLevel = async (req, res) => {
  let response = null;

  try {
    const accountId = req.currentUser._id;
    const request = req.body;
    const bodyAccountLvl = request.newLvl;

    await Account.findByIdAndUpdate(accountId, { $inc:{ accountLevel: bodyAccountLvl } });

    response = new Response.Success(false, 'Level updated successfully');
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const updateCompletedQuestion = async (req, res) => {
  let response = null;

  try {
    const accountId = req.currentUser._id;
    const request = req.body;
    const bodycompletedQuestion = request.newQuestComplete;

    await Account.findByIdAndUpdate(accountId, { $inc:{ completedQuestion: bodycompletedQuestion } });

    response = new Response.Success(false, 'Completed Question updated successfully');
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { updateExp, updateLevel, updateCompletedQuestion };