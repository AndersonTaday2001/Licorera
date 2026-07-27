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

export default server;
