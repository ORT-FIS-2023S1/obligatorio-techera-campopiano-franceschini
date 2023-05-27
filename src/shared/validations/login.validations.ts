import Joi from "joi";
const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(25).required(),
});

export default (req, res, next) => {
  const { error } = schema.validate(req.body);
  const role = req.header("x-role");

  if (error) {
    const errorMessage = error.details.map((err) => err.message).toString();
    res.render("login", {
      role,
      data: { errorMessage },
      configs: {},
    });
  } else {
    next();
  }
};
