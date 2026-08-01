// src/errors/UnauthorizedError.js
import { AppError } from "./AppError.js";

export class UnauthorizedError extends AppError {
  constructor(message = "No autenticado", code = "UNAUTHORIZED") {
    super(message, 401, code);
  }
}
