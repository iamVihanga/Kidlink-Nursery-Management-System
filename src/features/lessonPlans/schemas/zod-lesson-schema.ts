import { z } from "zod";
import { LessonPlanSchema } from "@/types/schema-types";

export const addLessonSchema = LessonPlanSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  teacherId: true
});

export type AddLessonSchema = z.infer<typeof addLessonSchema>;

export const idParamSchema = z.object({
  id: z.string().pipe(z.coerce.number())
});

export const deleteLessonSchema = idParamSchema;
export const updateLessonSchema = idParamSchema;
export const findByIdLessonSchema = idParamSchema;

export type DeleteLessonSchema = z.infer<typeof deleteLessonSchema>;
