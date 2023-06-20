import Joi from 'joi';
const schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  ingredients: Joi.string().required(),
  portions: Joi.number().min(0).required(),
  nutritionalInformation: Joi.string().required(),
  imageURL: Joi.string().uri().required(),
});

export default (req, res, next) => {
  const {error} = schema.validate(req.body);

  if (error) {
    const errorMessage = error.details.map((err) => err.message).toString();
    return res.status(400).json({error: errorMessage});
  } else {
    next();
  }
};
