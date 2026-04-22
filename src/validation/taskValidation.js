const Joi = require("joi");

exports.taskSchema = Joi.object({
  title: Joi.string().min(1).required(),
});