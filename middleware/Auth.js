const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const Account = require("../model/account");
const Response = require("../model/response");
const clearToken = require("../utils/clearToken");

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  const response = new Response.Error(true, "Unauthorized");

  if (!token) {
    res.status(httpStatus.UNAUTHORIZED).json(response);
    return;
  }

  const myToken = clearToken(token);

  jwt.verify(myToken, process.env.KEY, async (error, payload) => {
    if (error) {
      res.status(httpStatus.UNAUTHORIZED).json(response);
      return;
    }
    const id = payload.id;
    const account = await Account.findOne({ _id: id });
    req.currentUser = account;
    next();
  });
};

module.exports = requireAuth;