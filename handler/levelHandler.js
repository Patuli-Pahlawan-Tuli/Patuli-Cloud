const httpStatus = require('http-status');
const Response = require('../model/Response');
const Account = require('../model/Account');

const updateExp = async (req, res) => {
  let response = null;

  try {
    const accountId = req.currentUser._id;
    const request = req.body;
    const bodyAccountExp = parseInt(request.newExp);
    const levelIncrement = 100;

    const account = await Account.findById(accountId);
    const currentExp = account.accountExp;
    const currentLvl = account.accountLevel;
    const newExp = currentExp + bodyAccountExp;
    const level = Math.floor(newExp / levelIncrement) + 1;

    await Account.findByIdAndUpdate(accountId, { accountExp: newExp});
    
    if(currentLvl != level){
      await Account.findByIdAndUpdate(accountId, { $inc:{ accountLevel: 1 } });
    }

    response = new Response.Success(false, 'Exp berhasil diperbarui');
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const updateCompletedSubQuiz = async (req, res) => {
  let response = null;

  try {
    const accountId = req.currentUser._id;
    const accountCompletedSubQuiz = req.currentUser.completedSubQuiz;
    const request = req.body;
    let bodycompletedQuiz = request.newQuestComplete;
    let bodySubQuiz = request.subQuiz;

    if (accountCompletedSubQuiz != bodySubQuiz){
      if(accountCompletedSubQuiz <= bodySubQuiz){

        await Account.findByIdAndUpdate(accountId, { $inc:{ completedSubQuiz: bodycompletedQuiz} });

        if(accountCompletedSubQuiz === 1 || accountCompletedSubQuiz === 3 || accountCompletedSubQuiz === 5){
          await Account.findByIdAndUpdate(accountId, { $inc:{ completedQuiz: bodycompletedQuiz} });
          response = new Response.Success(false, 'Completed quiz berhasil diperbarui');
          return res.status(httpStatus.OK).json(response);
        }
        
        response = new Response.Success(false, 'Completed quiz berhasil diperbarui');
        return res.status(httpStatus.OK).json(response);
      }
      if(accountCompletedSubQuiz > bodySubQuiz){
        throw new Error('Anda sudah melewati Sub Quiz ini');
      }
    }
    throw new Error('Anda sudah melewati Sub Quiz ini');

  } catch (error) {
    response = new Response.Error(true, error.message);
    return res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { updateExp, updateCompletedSubQuiz };