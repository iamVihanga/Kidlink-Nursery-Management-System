import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";
import {
  NotificationSchema,
  NotificationTagSchema
} from "@/types/schema-types/index";
import { sendNotificationSchema } from "@/features/notifications/schemas/send-notification";
import { createNotificationTag } from "@/features/notifications/schemas/create-tag";

const tags = ["Notifications"];

// ------------ Get Notification ------------
export const get = createRoute({
  tags,
  path: "/",
  method: "get",
  middleware: [serverAuthMiddleware],
  request: {
    query: z.object({ filter: z.string().optional() })
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(NotificationSchema),
      "The list of notifications"
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

// ------------ Send Notification ------------
export const send = createRoute({
  tags,
  path: "/",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      sendNotificationSchema,
      "The notification information to send"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      NotificationSchema,
      "The sent notification"
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

// ------------ Get Tags ------------
export const getTags = createRoute({
  tags,
  path: "/tag",
  method: "get",
  middleware: [serverAuthMiddleware],
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(NotificationTagSchema),
      "List of notification tags"
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

// ------------ Create Tag ------------
export const createTag = createRoute({
  tags,
  path: "/tag",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      createNotificationTag,
      "The notification tag information to create"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      NotificationTagSchema,
      "The created notification tag"
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

// ------------ Mark Notification as Read ------------
export const markAsRead = createRoute({
  tags,
  path: "/read",
  method: "patch",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      z.object({
        id: z.string().describe("Notification ID to mark as read")
      }),
      "The notification to mark as read"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({ success: z.boolean() }),
      "Operation result"
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
      "Notification not found"
    )
  }
});

export type GetRoute = typeof get;
export type SendRoute = typeof send;
export type GetTagsRoute = typeof getTags;
export type CreateTagRoute = typeof createTag;
export type MarkAsReadRoute = typeof markAsRead;
