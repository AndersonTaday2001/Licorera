import { Router } from "express";
import { TenantController } from "./tenant.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  createTenantSchema,
  updateTenantSchema,
  tenantIdParamSchema,
} from "./tenant.schema.js";

const router = Router();

router.post("/", validate(createTenantSchema), TenantController.create);

export default router;
