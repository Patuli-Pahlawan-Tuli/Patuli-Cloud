const Joi = require('joi');

const accountValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required().messages({ 
    "string.min": "Password harus 8-20 digit",
    "string.max": "Password harus 8-20 digit"
  }),
  passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
  name: Joi.string().regex(/^[a-zA-z]+([\s][a-zA-Z]+)*$/).max(20).required().messages({ 
    "string.pattern.base": "Nama tidak boleh mengandung simbol atau angka" 
  }),
});

module.exports = accountValidator;
