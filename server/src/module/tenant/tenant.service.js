// modules/tenants/tenant.service.js
import { TenantModel } from "./tenant.model.js";
import { ConflictError, NotFoundError } from "../../errors/index.js";

export const TenantService = {
  async createTenant(data) {
    const existingTenant = await TenantModel.findByRuc(data.ruc);

    if (existingTenant) {
      throw new ConflictError(
        "Ya existe un tenant registrado con este RUC",
        "TANANT_RUC_ALREADY_EXISTS",
      );
    }
    return TenantModel.create(data);
  },
  async getTenantById(id) {
    const tenant = await TenantModel.findId(id);
    if (!tenant) {
      throw new NotFoundError("Tenant no encontrado", "TENANT_NOT_FOUND");
    }
    return tenant;
  },
};
