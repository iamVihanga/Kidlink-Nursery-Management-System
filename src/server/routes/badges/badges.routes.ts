import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";
import { BadgeSchema } from "@/types/schema-types/index";
import { createBadgeSchema } from "@/features/badges/schemas/create-badge";
import { updateBadgeSchema } from "@/features/badges/schemas/update-badge";

const tags = ["Badges"];

const IdParamsSchema = z.object({ id: z.string() });

const querySchema = z.object({
  page: z.string().optional().default("1"),
  limit: z.string().optional().default("10"),
  search: z.string().optional()
});

const withPaginationSchema = z.object({
  badges: z.array(BadgeSchema),
  pagination: z.object({
    total: z.number().default(0),
    page: z.number().default(0),
    limit: z.number().default(0),
    totalPages: z.number().default(0)
  })
});

// ---------- List Badges ----------
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
      "The list of badges"
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

// ------------ Create Badge ------------
export const create = createRoute({
  tags,
  path: "/",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      createBadgeSchema,
      "The badge information to create new"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(BadgeSchema, "The created badge"),
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
    [HttpStatusCodes.OK]: jsonContent(BadgeSchema, "The badge by id"),
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
      updateBadgeSchema,
      "The badge information to update"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(BadgeSchema, "The updated badge"),
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
      "Badge not found !"
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
      "Badge deleted"
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
      "Badge not found !"
    )
  }
});

export const assign = createRoute({
  tags,
  description: "Assign badge to specific child.",
  path: "/{id}",
  method: "put",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(
      z.object({
        childId: z.string()
      }),
      "Child id to assign"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({ message: z.string() }),
      "Badge assigned"
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
      "Badge not found !"
    )
  }
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type FindOneRoute = typeof findOne;
export type UpdateRoute = typeof update;
export type RemoveRoute = typeof remove;
export type AssignRoute = typeof assign;
