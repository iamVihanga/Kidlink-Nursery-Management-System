import { ChildSchema } from "@/types/schema-types";
import { z } from "zod";

export const createChildSchema = ChildSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
}).required({
  parentId: true
});

export type CreateChildSchema = z.infer<typeof createChildSchema>;
