import { z } from "zod";

import { UserSchema } from "@/types/schema-types/index";

export const createUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  banReason: true,
  banExpires: true,
  banned: true,
  emailVerified: true,
  image: true,
  twoFactorEnabled: true
}).extend({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
