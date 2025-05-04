import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";
import { ClassSchema } from "@/types/schema-types/index";
import { createClassSchema } from "@/features/classes/schemas/create-class";
import { updateClassSchema } from "@/features/classes/schemas/update-class";

const tags = ["Classes"];

const IdParamsSchema = z.object({ id: z.string() });

const querySchema = z.object({
  page: z.string().optional().default("1"),
  limit: z.string().optional().default("10"),
  search: z.string().optional()
});

const withPaginationSchema = z.object({
  classes: z.array(ClassSchema),
  pagination: z.object({
    total: z.number().default(0),
    page: z.number().default(0),
    limit: z.number().default(0),
    totalPages: z.number().default(0)
  })
});

// ---------- List Parents ----------
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
      "The list of classes"
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
      "Active organization not found"
    )
  }
});

export const create = createRoute({
  tags,
  path: "/",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      createClassSchema,
      "The class information to create new"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(ClassSchema, "The created class"),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Access Forbidden"
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
    [HttpStatusCodes.OK]: jsonContent(ClassSchema, "The class by id"),
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
      "Child not found !"
    )
  }
});

export const update = createRoute({
  tags,
  path: "/{id}",
  method: "patch",
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(
      updateClassSchema,
      "The class information to update"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(ClassSchema, "The updated class"),
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
      "Child not found !"
    )
  }
});

export const remove = createRoute({
  tags,
  path: "/{id}",
  method: "delete",
  request: {
    params: IdParamsSchema
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({ message: z.string() }),
      "Class deleted"
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
      "Class not found !"
    )
  }
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type FindOneRoute = typeof findOne;
export type UpdateRoute = typeof update;
export type RemoveRoute = typeof remove;
