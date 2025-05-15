import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";
import type {
  ListRoute,
  AssignRoute,
  CreateRoute

  // TODO: Complete these route handlers
  // FindOneRoute,
  // RemoveRoute,
  // UpdateRoute
} from "@/server/routes/feedbacks/feedbacks.routes";
import { AppRouteHandler } from "@/types/server";

type QueryParams = {
  page?: string;
  limit?: string;
  search?: string;
};

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const {
    page = "1",
    limit = "10",
    search = ""
  } = c.req.query() as QueryParams;

  // Convert to numbers and validate
  const pageNum = Math.max(1, parseInt(page));
  const limitNum = Math.max(1, Math.min(100, parseInt(limit))); // Cap at 100 items
  const offset = (pageNum - 1) * limitNum;

  // Build the where condition
  const whereCondition = {};

  // Add search condition if provided
  let feedbackWhereCondition = {};

  if (search && search.trim() !== "") {
    feedbackWhereCondition = {
      name: {
        contains: search,
        mode: "insensitive"
      }
    };
  }

  // Count query for total number of records
  const totalBadges = await prisma.childFeedback.count({
    where: {
      ...whereCondition,
      ...(Object.keys(feedbackWhereCondition).length > 0
        ? feedbackWhereCondition
        : undefined)
    }
  });

  // Main query with pagination
  const feedbacks = await prisma.childFeedback.findMany({
    where: whereCondition,
    skip: offset,
    take: limitNum,
    orderBy: {
      createdAt: "desc"
    }
  });

  // Filter out records where user doesn't match search criteria
  const filteredFeedbacks = search
    ? feedbacks.filter((feedback) =>
        feedback?.content?.toLowerCase().includes(search.toLowerCase())
      )
    : feedbacks;

  return c.json(
    {
      feedbacks: filteredFeedbacks,
      pagination: {
        total: totalBadges,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(totalBadges / limitNum)
      }
    },
    HttpStatusCodes.OK
  );
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const body = c.req.valid("json");

  const createdFeedback = await prisma.childFeedback.create({
    data: body
  });

  return c.json(createdFeedback, HttpStatusCodes.OK);
};

export const assign: AppRouteHandler<AssignRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const body = c.req.valid("json");
  const params = c.req.valid("param");

  await prisma.childFeedback.update({
    where: { id: params.id },
    data: { childId: body.childId }
  });

  return c.json({ message: `Feedback assigned to child !` }, 200);
};
