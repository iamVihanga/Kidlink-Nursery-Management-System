import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";
import {
  OrganizationSchema,
  NurseryDetailsSchema,
  BankDetailsSchema
} from "@/types/schema-types/index";

export const tags = ["Nurseries"];

// Request Schemas
const IdParamsSchema = z.object({ id: z.string() });

const querySchema = z.object({
  page: z.string().optional().default("1"),
  limit: z.string().optional().default("10"),
  search: z.string().optional()
});

const withPaginationSchema = z.object({
  nurseries: z.array(OrganizationSchema),
  pagination: z.object({
    total: z.number().default(0),
    page: z.number().default(0),
    limit: z.number().default(0),
    totalPages: z.number().default(0)
  })
});

// ---------- List Nurseries ----------
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
      "The list of nurseries"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    )
  }
});

// ---------- Get Nursery Details ----------
export const getDetails = createRoute({
  tags,
  path: "/details/{id}",
  method: "get",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      NurseryDetailsSchema,
      "Fetched nursery details"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Forbidden Request"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Nursery not found"
    )
  }
});

// ---------- Update Nursery Details ----------
export const addDetails = createRoute({
  tags,
  path: "/details/{id}",
  method: "patch",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(
      NurseryDetailsSchema.omit({
        organizationId: true,
        updatedAt: true,
        createdAt: true,
        id: true
      }),
      "The nursery details to add"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      NurseryDetailsSchema,
      "Updated nursery details"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      z.object({ message: z.string() }),
      "Forbidden Request"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Nursery not found"
    )
  }
});

// ---------- Get Bank Details ----------
export const getBankDetails = createRoute({
  tags,
  path: "/bank/{id}",
  method: "get",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      BankDetailsSchema,
      "Fetched nursery bank details"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Nursery bank details not found"
    )
  }
});

// ---------- Update Bank Details ----------
export const createBankDetails = createRoute({
  tags,
  path: "/bank/{id}",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(
      BankDetailsSchema.omit({
        nurseryDetailsId: true,
        updatedAt: true,
        createdAt: true,
        id: true
      }),
      "The nursery bank details to add"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      BankDetailsSchema,
      "Created nursery bank details"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      z.object({ message: z.string() }),
      "Nursery not found"
    )
  }
});

export type ListRoute = typeof list;
export type AddDetailsRoute = typeof addDetails;
export type GetDetailsRoute = typeof getDetails;
export type GetBankDetailsRoute = typeof getBankDetails;
export type CreateBankDetailsRoute = typeof createBankDetails;
