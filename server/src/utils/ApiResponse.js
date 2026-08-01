// src/utils/ApiResponse.js

export class ApiResponse {
  constructor(statusCode, data = null, message = "Exito") {
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data,
    });
  }
}

/**
 * Implementar en controllers
 * return new ApiResponse(201, tenant, "Tenant creado exitosamente").send(res);
 */
