// src/errors/NotFoundError.js

import { AppError } from "./AppError.js";

export class NotFoundError extends AppError {
  constructor(message = "Recurso no encontrado", code = "NOT_FOUND") {
    super(message, 404, code);
  }
}
