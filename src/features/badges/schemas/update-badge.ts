import { z } from "zod";
import { BadgeSchema } from "@/types/schema-types";

export const updateBadgeSchema = BadgeSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true
}).partial();

export type UpdateBadgeSchema = z.infer<typeof updateBadgeSchema>;
