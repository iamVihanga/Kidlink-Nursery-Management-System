import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";
import { ChildSchema } from "@/types/schema-types/index";
import { createChildSchema } from "@/features/children/schemas/create-child";
import { updateChildSchema } from "@/features/children/schemas/update-child";

const tags = ["Children"];

const IdParamsSchema = z.object({ id: z.string() });

const querySchema = z.object({
  page: z.string().optional().default("1"),
  limit: z.string().optional().default("10"),
  search: z.string().optional()
});

const withPaginationSchema = z.object({
  children: z.array(ChildSchema),
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
      "The list of children"
    ),
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

export const create = createRoute({
  tags,
  path: "/",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      createChildSchema,
      "The child information to create new"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(ChildSchema, "The created child"),
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
    [HttpStatusCodes.OK]: jsonContent(ChildSchema, "The child"),
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
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(
      updateChildSchema,
      "The child information to update"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(ChildSchema, "The updated child"),
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
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({ message: z.string() }),
      "The child deleted"
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
      "Child not found !"
    )
  }
});

export const assignToClass = createRoute({
  tags,
  path: "/class/",
  method: "put",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      z.object({
        childId: z.string(),
        classId: z.string()
      }),
      "The child and class information to update"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(ChildSchema, "The child updated"),
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
      "Child / Class not found !"
    )
  }
});

export const leaveFromClass = createRoute({
  tags,
  path: "/class/",
  method: "delete",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      z.object({
        childId: z.string(),
        classId: z.string()
      }),
      "The child and class information to leave from class"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(ChildSchema, "The child updated"),
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
      "Child / Class not found !"
    )
  }
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type FindOneRoute = typeof findOne;
export type UpdateRoute = typeof update;
export type RemoveRoute = typeof remove;
