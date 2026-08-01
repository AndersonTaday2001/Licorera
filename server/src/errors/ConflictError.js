// src/errors/ConflictError.js

import { AppError } from "./AppError.js";

export class ConflictError extends AppError {
  constructor(message = "El recurso ya existe", code = "CONFLICT") {
    super(message, 409, code);
  }
}
