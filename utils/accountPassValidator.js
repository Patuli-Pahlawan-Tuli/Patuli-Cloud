const Joi = require('joi');

const accountPassValidator = Joi.object({
  email: Joi.string().email(),
  oldPassword: Joi.string().min(8).max(20).required(),
  newPassword: Joi.string().min(8).max(20).required(),
  passwordConfirmation: Joi.string().required().valid(Joi.ref('newPassword')),
  name: Joi.string().regex(/^[a-zA-z]+([\s][a-zA-Z]+)*$/).max(20),
});

module.exports = accountPassValidator;
