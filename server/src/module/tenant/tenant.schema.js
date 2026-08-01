// modules/tenants/tenant.schema.js

import { z } from "zod";

const TenantStatusEnum = z.enum(["ACTIVE", "INACTIVE", "SUSPENDED"]);

const rucSchema = z
  .string()
  .length(13, "El RUC debe tener exactamente 13 dígitos")
  .regex(/^\d+$/, "El RUC solo debe contener números");

const baseTenantSchema = {
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .max(150, "El nombre no puede exceder 150 caracteres"),

  businessName: z
    .string()
    .max(200, "La razón social no puede exceder 200 caracteres")
    .optional()
    .nullable(),

  ruc: rucSchema,

  email: z
    .string()
    .email("Email inválido")
    .max(150, "El email no puede exceder 150 caracteres")
    .optional()
    .nullable(),

  phone: z
    .string()
    .max(20, "El teléfono no puede exceder 20 caracteres")
    .optional()
    .nullable(),

  address: z.string().optional().nullable(),

  status: TenantStatusEnum.optional(),
};

export const createTenantSchema = z.object(baseTenantSchema);

export const updateTenantSchema = z.object({
  name: baseTenantSchema.name.optional(),
  businessName: baseTenantSchema.businessName,
  ruc: baseTenantSchema.ruc.optional(),
  email: baseTenantSchema.email,
  phone: baseTenantSchema.phone,
  address: baseTenantSchema.address,
  status: baseTenantSchema.status,
});

export const tenantIdParamSchema = z.object({
  id: z.string().uuid("El id del tenant debe ser un UUID válido"),
});
