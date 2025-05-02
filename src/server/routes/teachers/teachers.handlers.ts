import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";
import type { ListRoute } from "@/server/routes/teachers/teachers.routes";
import { AppRouteHandler } from "@/types/server";

type QueryParams = {
  page?: string;
  limit?: string;
  search?: string;
};

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
    organizationId: activeOrganizationId,
    role: "admin"
  };

  // Add search condition if provided
  let userWhereCondition = {};

  if (search && search.trim() !== "") {
    userWhereCondition = {
      name: {
        contains: search,
        mode: "insensitive"
      }
    };
  }

  // Count query for total number of records
  const totalTeachers = await prisma.member.count({
    where: {
      ...whereCondition,
      user:
        Object.keys(userWhereCondition).length > 0
          ? userWhereCondition
          : undefined
    }
  });

  // Main query with pagination
  const teachers = await prisma.member.findMany({
    where: whereCondition,
    include: {
      user: true
    },
    skip: offset,
    take: limitNum,
    orderBy: {
      createdAt: "desc"
    }
  });

  // Filter out records where user doesn't match search criteria
  const filteredTeachers = search
    ? teachers.filter((teacher) =>
        teacher.user?.name?.toLowerCase().includes(search.toLowerCase())
      )
    : teachers;

  // Transform the results to include only necessary user information
  const transformedTeachers = filteredTeachers.map(({ user, ...member }) => ({
    id: member.id,
    userId: user?.id,
    name: user?.name ?? "",
    email: user?.email ?? "",
    image: user?.image ?? undefined,
    role: member.role,
    createdAt: member.createdAt,
    organizationId: member.organizationId
  }));

  return c.json(
    {
      teachers: transformedTeachers,
      pagination: {
        total: totalTeachers,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(totalTeachers / limitNum)
      }
    },
    HttpStatusCodes.OK
  );
};
