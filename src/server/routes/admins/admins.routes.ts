import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";

const tags = ["Nursery Admins"];

const querySchema = z.object({
  page: z.string().optional().default("1"),
  limit: z.string().optional().default("10"),
  search: z.string().optional()
});

const withPaginationSchema = z.object({
  admins: z.array(
    z.object({
      id: z.string(),
      userId: z.string(),
      name: z.string(),
      email: z.string(),
      image: z.string().optional(),
      role: z.string(),
      createdAt: z.date(),
      organizationId: z.string()
    })
  ),
  pagination: z.object({
    total: z.number().default(0),
    page: z.number().default(0),
    limit: z.number().default(0),
    totalPages: z.number().default(0)
  })
});

// ---------- List Admins ----------
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
      "The list of nursery admins"
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

export type ListRoute = typeof list;
