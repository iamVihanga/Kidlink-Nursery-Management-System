import { z } from "zod";

import { ClassSchema } from "@/types/schema-types";

export const createClassSchema = ClassSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export type CreateClassSchema = z.infer<typeof createClassSchema>;
