const joi = require("joi");
const authSchemaez = joi.object({
  email: joi.string().email().required(),
  zip: joi.string().min(6).required(),
});
const authSchemaid = joi.object({
  id: joi.string().required(),
});
module.exports = { authSchemaid, authSchemaez };
