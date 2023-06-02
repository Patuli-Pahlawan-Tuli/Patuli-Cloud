const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
const Response = require('../model/Response');
const Account = require('../model/Account');
const accountValidator = require('../utils/accountValidator');
const loginValidator = require('../utils/loginValidator');
const bcrypt = require('../utils/bcrypt');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const secretmanagerClient = new SecretManagerServiceClient();

const callAccessSecretVersion = async () => {
  // Construct request
  const request = {
    name: 'projects/patuli-project/secrets/KEY/versions/latest'
  };

  // Run request
  const [response] = await secretmanagerClient.accessSecretVersion(request);
  const secretValue = response.payload.data.toString();
  return secretValue;
}

const register = async (req, res) => {
  let response = null;
  try {
    const request = await accountValidator.validateAsync(req.body);

    const accounts = await Account.findOne({ email: request.email });
    if (accounts) {
      response = new Response.Error(true, 'Email Sudah Ada');
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const hashedPassword = await bcrypt.hash(request.password);
    request.password = hashedPassword;

    const account = new Account(request);
    account.imageUrl = 'https://storage.googleapis.com/patuli-storage/placeholder-image.png';
    const result = await account.save();
    response = new Response.Success(false, 'Account Created', result);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

const login = async (req, res) => {
  let response = null;
  const loginErrorMessage = 'Invalid email atau password';
  try {
    const request = await loginValidator.validateAsync(req.body);

    const account = await Account.findOne({ email: request.email });
    if (!account) {
      response = new Response.Error(true, loginErrorMessage);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const isValidPassword = await bcrypt.compare(
      request.password,
      account.password,
    );
    if (!isValidPassword) {
      response = new Response.Error(true, loginErrorMessage);
      res.status(httpStatus.BAD_REQUEST).json(response);
      return;
    }

    const createJwtToken = jwt.sign({ id: account._id }, await callAccessSecretVersion());
    const data = {
      id: account._id,
      name: account.name,
      token: createJwtToken,
    };
    response = new Response.Success(false, 'success', data);
    res.status(httpStatus.OK).json(response);
  } catch (error) {
    response = new Response.Error(true, error.message);
    res.status(httpStatus.BAD_REQUEST).json(response);
  }
};

module.exports = { register, login };
