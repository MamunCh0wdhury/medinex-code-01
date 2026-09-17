import Joi from "joi";

export const productValidation = Joi.object({
  name: Joi.string().min(2).max(100).required(), // unique constraint handled at DB level

  model: Joi.string().min(1).max(50).required(),

  description: Joi.string().allow("").max(500), // optional, can be empty string

  isActive: Joi.boolean().default(true),

  imageUrl: Joi.string().uri().allow("").optional(), // optional, must be valid URL if provided

  categoryId: Joi.number().integer().positive().when("$isCreate", {
  is: true,
  then: Joi.required(),
  otherwise: Joi.optional(),
})
 // required foreign key
});
