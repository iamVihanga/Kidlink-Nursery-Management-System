import { z } from "zod";
import { NotificationTagSchema } from "@/types/schema-types";

export const createNotificationTag = NotificationTagSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true
});

export type CreateNotificationTag = z.infer<typeof createNotificationTag>;
