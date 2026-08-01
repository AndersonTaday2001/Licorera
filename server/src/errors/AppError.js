// src/errors/AppError.js

export class AppError extends Error {
  /**
   * @param {string} message - Mensaje legible para el cliente
   * @param {number} statusCode - Codigo HTTP
   * @param {String} code - Codigo interno legible (ej: "TENANT_NOT_FOUND")
   * @param {any} details - Info Adicional Opcional (ej: errores de validacion)
   */
  constructor(
    message,
    statusCode = 500,
    code = "INTERNAL_ERROR",
    details = null,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
