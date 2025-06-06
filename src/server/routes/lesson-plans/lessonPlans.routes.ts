import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";
import { LessonPlanSchema } from "@/types/schema-types/index";
import { addLessonSchema } from "@/features/lessonPlans/schemas/zod-lesson-schema";

const tags = ["Lesson Plans"];

const IdParamsSchema = z.object({ id: z.string() });

const querySchema = z.object({
  page: z.string().optional().default("1"),
  limit: z.string().optional().default("10"),
  search: z.string().optional(),
  classId: z.string().optional()
});

const withPaginationSchema = z.object({
  lessonPlans: z.array(LessonPlanSchema),
  pagination: z.object({
    total: z.number().default(0),
    page: z.number().default(0),
    limit: z.number().default(0),
    totalPages: z.number().default(0)
  })
});

// Create/update schema
const lessonPlanInputSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  classId: z.string().min(1, "Class is required")
});

// ---------- List Lesson Plans ----------
export const list = createRoute({
  tags,
  path: "/",
  method: "get",
  middleware: [serverAuthMiddleware],
  request: {
    query: querySchema
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      withPaginationSchema,
      "The list of lesson plans"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Access Forbidden"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Organization not found"
    )
  }
});

// ------------ Create Lesson Plan ------------
export const create = createRoute({
  tags,
  path: "/",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      addLessonSchema,
      "The lesson plan information to create"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      LessonPlanSchema,
      "The created lesson plan"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Access Forbidden"
    ),
    [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
      z.object({ message: z.string() }),
      "Server error occurred"
    )
  }
});

export const findOne = createRoute({
  tags,
  path: "/{id}",
  method: "get",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      LessonPlanSchema,
      "The lesson plan by id"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Access Forbidden"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Lesson plan not found!"
    ),
    [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
      z.object({ message: z.string() }),
      "Server error occurred"
    )
  }
});

export const update = createRoute({
  tags,
  path: "/{id}",
  method: "patch",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(
      lessonPlanInputSchema.partial(),
      "The lesson plan information to update"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      LessonPlanSchema,
      "The updated lesson plan"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Access Forbidden"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Lesson plan not found!"
    ),
    [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
      z.object({ message: z.string() }),
      "Server error occurred"
    )
  }
});

export const remove = createRoute({
  tags,
  path: "/{id}",
  method: "delete",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({ message: z.string() }),
      "Lesson plan deleted"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Access Forbidden"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Lesson plan not found!"
    ),
    [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
      z.object({ message: z.string() }),
      "Server error occurred"
    )
  }
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type FindOneRoute = typeof findOne;
export type UpdateRoute = typeof update;
export type RemoveRoute = typeof remove;
