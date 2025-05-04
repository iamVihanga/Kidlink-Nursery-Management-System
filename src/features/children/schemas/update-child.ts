import { ChildSchema } from "@/types/schema-types";
import { z } from "zod";

export const updateChildSchema = ChildSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
}).partial();

export type UpdateChildSchema = z.infer<typeof updateChildSchema>;
