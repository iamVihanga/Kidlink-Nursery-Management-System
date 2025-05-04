import { z } from "zod";

import { ClassSchema } from "@/types/schema-types";

export const updateClassSchema = ClassSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
}).partial();

export type UpdateClassSchema = z.infer<typeof updateClassSchema>;
