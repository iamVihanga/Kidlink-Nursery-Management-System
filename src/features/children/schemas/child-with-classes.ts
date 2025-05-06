import { z } from "zod";
import { ChildSchema, ClassSchema } from "@/types/schema-types/index";

export const childWithClassesSchema = ChildSchema.extend({
  classes: z.array(ClassSchema).optional()
}).strict();

export type ChildWithClasses = z.infer<typeof childWithClassesSchema>;
