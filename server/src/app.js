import express from "express";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import userRoutes from "./module/user/user.routes.js";
import tenantRoutes from "./module/tenant/tenant.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/tenants", tenantRoutes);
app.use(errorHandler);
export default app;
