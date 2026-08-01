// src/middlewares/error-handler.middleware.js

// src/middlewares/error-handler.middleware.js
import { AppError } from "../errors/index.js";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

export function errorHandler(err, req, res, next) {
  // 1. Errores controlados por AppError y sus hijos.
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      code: err.code,
      errors: err.details,
    });
  }

  // 2. Errores de validación de Zod que no pasaron por el middleware validate
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Datos inválidos",
      code: "VALIDATION_ERROR",
      errors: err.flatten().fieldErrors,
    });
  }

  // 3. Errores conocidos de Prisma
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // P2002: violación de constraint unique
    if (err.code === "P2002") {
      const field = err.meta?.target?.join(", ") ?? "campo";
      return res.status(409).json({
        success: false,
        message: `Ya existe un registro con este valor en: ${field}`,
        code: "UNIQUE_CONSTRAINT_VIOLATION",
      });
    }

    // P2025: registro no encontrado (ej: al hacer update/delete de algo que no existe)
    if (err.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "Registro no encontrado",
        code: "NOT_FOUND",
      });
    }
  }

  // 4. Error no controlado (bug real) - lo logueamos completo para debug
  console.error("💥 Error no controlado:", err);

  return res.status(500).json({
    success: false,
    message: "Error interno del servidor",
    code: "INTERNAL_ERROR",
  });
}
