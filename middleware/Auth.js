const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const Account = require('../model/Account');
const Response = require('../model/Response');
const clearToken = require('../utils/clearToken');
const tokenRevocation = require('../utils/tokenRevocation');

const secretmanagerClient = new SecretManagerServiceClient();

const callAccessSecretVersion = async () => {
  // Construct request
  const request = {
    name: 'projects/706533766585/secrets/KEY/versions/latest'
  };

  // Run request
  const [response] = await secretmanagerClient.accessSecretVersion(request);
  const secretValue = response.payload.data.toString();
  return secretValue;
}

const Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const response = new Response.Error(true, 'Unauthorized');
  
    if (!token) {
      res.status(httpStatus.UNAUTHORIZED).json(response);
      return;
    }
  
    const myToken = clearToken(token);
  
    if (await tokenRevocation.isTokenRevoked(token)) {
      res.status(httpStatus.UNAUTHORIZED).json(response);
      return;
    }
  
    jwt.verify(myToken, await callAccessSecretVersion(), async (error, payload) => {
      if (error) {
        res.status(httpStatus.UNAUTHORIZED).json(response);
        return;
      }
      
      const { id } = payload;
      const account = await Account.findOne({ _id: id });
      req.currentUser = account;
      next();
    });
  } catch (error) {
    const response = new Response.Error(true, 'Internal server error');
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(response);
  }
}

module.exports = Auth;
