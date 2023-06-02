const Joi = require('joi');

const accountPassValidator = Joi.object({
  email: Joi.string().email(),
  oldPassword: Joi.string().min(8).max(20).required().messages({ 
    "string.min": "Password harus 8-20 digit",
    "string.max": "Password harus 8-20 digit"
  }),
  newPassword: Joi.string().min(8).max(20).invalid(Joi.ref('oldPassword')).required().messages({ 
    "string.min": "Password harus 8-20 digit",
    "string.max": "Password harus 8-20 digit",
    "any.invalid": "Password tidak boleh sama dengan yang lama"
  }),
  passwordConfirmation: Joi.string().required().valid(Joi.ref('newPassword')),
  name: Joi.string().regex(/^[a-zA-z]+([\s][a-zA-Z]+)*$/).max(20),
});

module.exports = accountPassValidator;
