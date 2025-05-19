import { z } from "zod";

export const createNurserySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  image: z.any().optional(), // Consider refining this type for better validation
  themeColor: z
    .string()
    .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
      message: "Invalid hex color format (e.g. #FF0000)",
    })
    .optional(),
});

export type CreateNurserySchema = z.infer<typeof createNurserySchema>;
