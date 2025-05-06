import { z } from "zod";

export const assignToClassSchema = z.object({ classId: z.string() });

export type AssignToClassSchema = z.infer<typeof assignToClassSchema>;
