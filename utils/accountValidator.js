const Joi = require('joi');

const accountValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
  name: Joi.string().regex(/^[a-zA-z]+([\s][a-zA-Z]+)*$/).max(20).required()
});

module.exports = accountValidator;
