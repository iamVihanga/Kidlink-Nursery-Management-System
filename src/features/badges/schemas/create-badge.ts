import { z } from "zod";
import { BadgeSchema } from "@/types/schema-types";

export const createBadgeSchema = BadgeSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true
});

export type CreateBadgeSchema = z.infer<typeof createBadgeSchema>;
