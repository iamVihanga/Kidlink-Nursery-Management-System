import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";
import type {
  ListRoute,
  CreateRoute,
  FindOneRoute,
  UpdateRoute,
  RemoveRoute
} from "@/server/routes/classes/classes.routes";
import { AppRouteHandler } from "@/types/server";

type QueryParams = {
  page?: string;
  limit?: string;
  search?: string;
};

// ------------ List all classes ------------
export const list: AppRouteHandler<ListRoute> = async (c) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const activeOrganizationId = session?.activeOrganizationId;

  if (!activeOrganizationId) {
    return c.json(
      { message: "No active organization found" },
      HttpStatusCodes.NOT_FOUND
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
  const whereCondition = {
    organizationId: activeOrganizationId
  };

  // Add search condition if provided
  let classWhereCondition = {};

  if (search && search.trim() !== "") {
    classWhereCondition = {
      name: {
        contains: search,
        mode: "insensitive"
      }
    };
  }

  // Count query for total number of records
  const totalClasses = await prisma.class.count({
    where: {
      ...whereCondition,
      ...(Object.keys(classWhereCondition).length > 0
        ? classWhereCondition
        : undefined)
    }
  });

  // Main query with pagination
  const classes = await prisma.class.findMany({
    where: whereCondition,
    skip: offset,
    take: limitNum,
    orderBy: {
      createdAt: "desc"
    }
  });

  // Filter out records where user doesn't match search criteria
  const filteredClasses = search
    ? classes.filter((singleClass) =>
        singleClass?.name?.toLowerCase().includes(search.toLowerCase())
      )
    : classes;

  return c.json(
    {
      classes: filteredClasses,
      pagination: {
        total: totalClasses,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(totalClasses / limitNum)
      }
    },
    HttpStatusCodes.OK
  );
};

// ------ Create class ------
export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const classData = c.req.valid("json");

  const createdClass = await prisma.class.create({
    data: classData
  });

  return c.json(createdClass, HttpStatusCodes.OK);
};

// ------ Fetch single class ------
export const findOne: AppRouteHandler<FindOneRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const params = c.req.valid("param");

  const classExists = await prisma.class.findUnique({
    where: { id: params.id }
  });

  if (!classExists) {
    return c.json({ message: "Class not found" }, HttpStatusCodes.NOT_FOUND);
  }

  if (user.role !== "admin") {
    const session = c.get("session");

    if (!session?.activeOrganizationId) {
      return c.json({ message: "Access Forbidden" }, HttpStatusCodes.FORBIDDEN);
    }

    if (classExists.organizationId !== session.activeOrganizationId) {
      return c.json({ message: "Access Forbidden" }, HttpStatusCodes.FORBIDDEN);
    }
  }

  return c.json(classExists, HttpStatusCodes.OK);
};

// ------------ Update class ------------
export const update: AppRouteHandler<UpdateRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const params = c.req.valid("param");
  const classUpdates = c.req.valid("json");

  const updatedClass = await prisma.class.update({
    where: { id: params.id },
    data: classUpdates
  });

  return c.json(updatedClass, HttpStatusCodes.OK);
};

// ------------ Delete class ------------
export const remove: AppRouteHandler<RemoveRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const params = c.req.valid("param");

  const classExisting = await prisma.class.findUnique({
    where: { id: params.id }
  });

  if (!classExisting) {
    return c.json({ message: "Class not found" }, HttpStatusCodes.NOT_FOUND);
  }

  await prisma.class.delete({
    where: { id: params.id }
  });

  return c.json({ message: "Class deleted successfully" }, HttpStatusCodes.OK);
};
