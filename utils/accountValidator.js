const Joi = require('joi');

const accountValidator = Joi.object({
  name: Joi.string().regex(/[a-zA-Z\s]+/).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
});
