import { z } from "zod";

export const inviteParentSchema = z.object({
  email: z.string().email()
});

export type InviteParentSchema = z.infer<typeof inviteParentSchema>;
