import { z } from "zod";
import { ChildSchema, ChildFeedbackSchema } from "@/types/schema-types/index";

export const childWithFeedbacksSchema = ChildSchema.extend({
  feedbacks: z.array(ChildFeedbackSchema)
});

export type ChildWithFeedbacks = z.infer<typeof childWithFeedbacksSchema>;
