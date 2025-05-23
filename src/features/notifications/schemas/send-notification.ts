import { z } from "zod";
import { NotificationSchema } from "@/types/schema-types";

export const sendNotificationSchema = NotificationSchema.omit({
  senderId: true,
  createdAt: true,
  updatedAt: true,
  id: true,
}).extend({
  recipients: z
    .array(z.string())
    .nonempty("At least one recipient is required"),
  tags: z.array(z.string()).nonempty("At least one tag is required"),
});

export type SendNotification = z.infer<typeof sendNotificationSchema>;
