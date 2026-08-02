import { BadRequestError } from "../errors/index.js";

export function validate(schema, source = "body") {
  return (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return next(new BadRequestError("Datos invalidos", errors));
    }
    req[source] = result.data;
    next();
  };
}
