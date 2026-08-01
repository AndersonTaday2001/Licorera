// src/errors/BadRequestError.js

import { AppError } from "./AppError.js";

export class BadRequestError extends AppError {
  constructor(
    message = "Solucion invalida",
    details = null,
    code = "BAD_REQUEST",
  ) {
    super(message, 400, code, details);
  }
}
