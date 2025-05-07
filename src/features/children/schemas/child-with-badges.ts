import { z } from "zod";
import { ChildSchema, BadgeSchema } from "@/types/schema-types/index";

export const childWithBadgesSchema = ChildSchema.extend({
  badges: z.array(BadgeSchema)
});

export type ChildWithBadges = z.infer<typeof childWithBadgesSchema>;
