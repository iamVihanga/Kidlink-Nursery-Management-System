import { z } from "zod";

import { ChildSchema } from "@/types/schema-types";

export const updateChildSchema = ChildSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
}).partial();

export type UpdateChildSchema = z.infer<typeof updateChildSchema>;
