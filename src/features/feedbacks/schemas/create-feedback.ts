import { z } from "zod";
import { ChildFeedbackSchema } from "@/types/schema-types";

export const createFeedbackSchema = ChildFeedbackSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true
});

export type CreateFeedbackSchema = z.infer<typeof createFeedbackSchema>;
