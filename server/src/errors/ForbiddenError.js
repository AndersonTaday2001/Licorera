// src/errors/ForbiddenError.js
import { AppError } from "./AppError.js";

export class ForbiddenError extends AppError {
  constructor(
    message = "No tienes permisos para esta acción",
    code = "FORBIDDEN",
  ) {
    super(message, 403, code);
  }
}
