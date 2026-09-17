import Joi from "joi";

export const categoryValidation = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  isActive: Joi.boolean().default(true),
});
