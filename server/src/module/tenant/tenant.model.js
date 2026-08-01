// modules/tenants/tenant.model.js
import { prisma } from "../../lib/prisma.js";

export const TenantModel = {
  create: (data) => prisma.tenant.create({ data }),

  update: (id, data) => prisma.tenant.update({ where: { id }, data }),

  findId: (id) => prisma.tenant.findUnique({ where: { id } }),

  findByRuc: (ruc) => prisma.tenant.findUnique({ where: { ruc } }),

  delete: (id) => prisma.tenant.delete({ where: { id } }),
};
