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

    await Account.findByIdAndUpdate(accountId, { accountExp: bodyAccountExp });

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

    await Account.findByIdAndUpdate(accountId, { accountLevel: bodyAccountLvl });

    response = new Response.Success(false, 'Exp updated successfully');
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { updateExp, updateLevel };