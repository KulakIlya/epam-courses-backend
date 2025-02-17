import HttpError from '../helpers/HttpError.js';

const validateBody = (schema) => (req, _, next) => {
  const { error } = schema.validate(req.body);
  if (error) return next(HttpError(400, error));

  next();
};
export default validateBody;
