// modules/tenants/tenant.controller.js
import { TenantService } from "./tenant.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const TenantController = {
  create: asyncHandler(async (req, res) => {
    const tenant = await TenantService.createTenant(req.body);
    return new ApiResponse(201, tenant, "Tenant creado exitosamente").send(res);
  }),
  getById: asyncHandler(async (req, res) => {
    const tent = await TenantService.getTenantById(req.params.id);
    return new ApiResponse(200, tenant, "Tenant encontrado").send(res);
  }),
};
