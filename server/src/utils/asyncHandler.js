// src/utils/asyncHandler.js

/**
 * Envuelve un controller async para capturar errores automaticamente
 * y pasarlos a next(), sin necesidad de try/catch en cada uno
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
