import app from "./app.js";

// ─── Variables de entorno con destructuring ────────────────────────────────────
const {
  PORT = 3000,
  NODE_ENV = "development",
  APP_NAME = "Servidor Node.js",
} = process.env;

// ─── Iniciar servidor ──────────────────────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log("─────────────────────────────────────────");
  console.log(`  🚀 ${APP_NAME}`);
  console.log(`  📡 Puerto:      http://localhost:${PORT}`);
  console.log(`  🌍 Entorno:     ${NODE_ENV}`);
  console.log(`  🕒 Iniciado:    ${new Date().toLocaleString()}`);
  console.log("─────────────────────────────────────────");
});

// ─── Cierre limpio ─────────────────────────────────────────────────────────────
const shutdown = (signal) => {
  console.log(`\n⚠️  ${signal} recibido. Cerrando servidor...`);
  server.close(() => {
    console.log("✅ Servidor cerrado correctamente.");
    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

export default server;
