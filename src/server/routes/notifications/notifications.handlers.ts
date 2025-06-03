/* eslint-disable @typescript-eslint/no-explicit-any */
import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";
import type {
  GetRoute,
  SendRoute,
  CreateTagRoute,
  GetTagsRoute,
  MarkAsReadRoute
} from "@/server/routes/notifications/notifications.routes";
import { AppRouteHandler } from "@/types/server";

// Update the existing get handler to include filtering
export const get: AppRouteHandler<GetRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const filter = c.req.query("filter") as "all" | "unread" | "read" | undefined;

  // Build the where clause based on filter
  const whereClause: any = {
    recipients: {
      some: {
        recipientId: user.id
      }
    }
  };

  if (filter === "read") {
    whereClause.recipients = {
      some: {
        recipientId: user.id,
        readAt: { not: null }
      }
    };
  } else if (filter === "unread") {
    whereClause.recipients = {
      some: {
        recipientId: user.id,
        readAt: null
      }
    };
  }

  // Get notifications with sender and recipients info
  const notifications = await prisma.notification.findMany({
    where: whereClause,
    include: {
      sender: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true
        }
      },
      recipients: {
        where: {
          recipientId: user.id
        }
      },
      tags: {
        include: {
          notificationTag: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return c.json(notifications, HttpStatusCodes.OK);
};

export const send: AppRouteHandler<SendRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const body = c.req.valid("json");

  // Create the notification
  const notification = await prisma.notification.create({
    data: {
      content: body.content,
      senderId: user.id,
      read: false
    }
  });

  // Assign tags to the notification
  await prisma.notificationTag_Notification.createMany({
    data: body.tags.map((tagId: string) => ({
      notificationId: notification.id,
      notificationTagId: tagId
    }))
  });

  console.log("📨 Notification created:", notification);
  console.log("👥 Recipients:", body.recipients);
  console.log("🏷️ Tags:", body.tags);

  // Send the notification to each recipient
  await prisma.notificationRecipient.createMany({
    data: body.recipients.map((recipientId: string) => ({
      notificationId: notification.id,
      recipientId
    }))
  });

  return c.json(notification, HttpStatusCodes.OK);
};

// ------------ Get Tags Handler ------------
export const getTags: AppRouteHandler<GetTagsRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const tags = await prisma.notificationTag.findMany();

  return c.json(tags, HttpStatusCodes.OK);
};

// ------------ Create Tag Handler ------------
export const createTag: AppRouteHandler<CreateTagRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const body = c.req.valid("json");

  const createTag = await prisma.notificationTag.create({
    data: { name: body.name }
  });

  return c.json(createTag, HttpStatusCodes.OK);
};

// ------------ Mark As Read Handler ------------
export const markAsRead: AppRouteHandler<MarkAsReadRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const { id } = c.req.valid("json");

  // Check if the notification exists and is for this user
  const notificationRecipient = await prisma.notificationRecipient.findFirst({
    where: {
      notificationId: id,
      recipientId: user.id,
      readAt: null // Only if it hasn't been read yet
    }
  });

  if (!notificationRecipient) {
    return c.json(
      { message: "Notification not found or already read" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  // Mark the notification as read for this specific user
  await prisma.notificationRecipient.update({
    where: {
      id: notificationRecipient.id
    },
    data: {
      readAt: new Date()
    }
  });

  return c.json({ success: true }, HttpStatusCodes.OK);
};
