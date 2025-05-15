import { z } from "zod";
import { ChildFeedbackSchema } from "@/types/schema-types";

export const updateFeedbackSchema = ChildFeedbackSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true
}).partial();

export type UpdateFeedbackSchema = z.infer<typeof updateFeedbackSchema>;
