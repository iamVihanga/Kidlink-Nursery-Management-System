import { NurseryDetailsSchema } from "@/types/schema-types";
import { z } from "zod";

export const NurseryDetailsUpsertSchema = NurseryDetailsSchema.omit({
  organizationId: true,
  updatedAt: true,
  createdAt: true,
  id: true
});

export type NurseryDetailsUpsertSchemaT = z.infer<
  typeof NurseryDetailsUpsertSchema
>;
