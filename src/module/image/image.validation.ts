import Joi from "joi";

export const imageValidation = Joi.object({
  imageUrl: Joi.string().uri().required(), // ensure it's a valid URL
  eyebrow: Joi.string().max(255).required(),
  heading: Joi.string().max(255).required(),
  body: Joi.string().max(2000).required(),
  isActive: Joi.boolean().default(true),
});
