import { z } from "zod";

export const inviteTeachersSchema = z.object({
  email: z.string().email()
});

export type InviteTeachersSchema = z.infer<typeof inviteTeachersSchema>;
