import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";
import type {
  ListRoute,
  CreateRoute,
  UpdateRoute,
} from "@/server/routes/payments/payments.routes";
import { AppRouteHandler } from "@/types/server";

type QueryParams = {
  page?: string;
  limit?: string;
  search?: string;
};

// Helper function to convert dates to strings for API response
const formatPayment = (payment: any) => {
  return {
    ...payment,
    paymentDate:
      payment.paymentDate instanceof Date
        ? payment.paymentDate.toISOString()
        : payment.paymentDate,
    createdAt:
      payment.createdAt instanceof Date
        ? payment.createdAt.toISOString()
        : payment.createdAt,
    updatedAt:
      payment.updatedAt instanceof Date
        ? payment.updatedAt.toISOString()
        : payment.updatedAt,
  };
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

  if (!session?.activeOrganizationId) {
    return c.json(
      { message: "Organization not found" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  const {
    page = "1",
    limit = "10",
    search = "",
  } = c.req.query() as QueryParams;

  // Convert to numbers and validate
  const pageNum = Math.max(1, parseInt(page));
  const limitNum = Math.max(1, Math.min(100, parseInt(limit))); // Cap at 100 items
  const offset = (pageNum - 1) * limitNum;

  // Build the where condition
  const whereCondition = {
    organizationId: session.activeOrganizationId,
  };

  // Add search condition if provided
  let searchCondition = {};

  if (search && search.trim() !== "") {
    searchCondition = {
      OR: [
        {
          description: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          status: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          paymentMethod: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    };
  }

  // Count query for total number of records
  const totalPayments = await prisma.payment.count({
    where: {
      ...whereCondition,
      ...(Object.keys(searchCondition).length > 0 ? searchCondition : {}),
    },
  });

  // Main query with pagination
  const payments = await prisma.payment.findMany({
    where: {
      ...whereCondition,
      ...(Object.keys(searchCondition).length > 0 ? searchCondition : {}),
    },
    skip: offset,
    take: limitNum,
    orderBy: {
      createdAt: "desc",
    },
  });

  // Format payments to ensure dates are strings and ensure all required fields
  const formattedPayments = payments.map(formatPayment);

  return c.json(
    {
      payments: formattedPayments,
      pagination: {
        total: totalPayments,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(totalPayments / limitNum),
      },
    },
    HttpStatusCodes.OK
  );
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  if (!session?.activeOrganizationId) {
    return c.json(
      { message: "Organization not found" },
      HttpStatusCodes.FORBIDDEN
    );
  }

  const body = c.req.valid("json");

  // Ensure the payment is associated with the active organization
  const paymentData = {
    ...body,
    organizationId: session.activeOrganizationId,
  };

  const createdPayment = await prisma.payment.create({
    data: paymentData,
  });

  // Format the response to ensure dates are strings
  const formattedPayment = formatPayment(createdPayment);

  return c.json(formattedPayment, HttpStatusCodes.OK);
};

export const update: AppRouteHandler<UpdateRoute> = async (c) => {
  const user = c.get("user");
  const session = c.get("session");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  if (!session?.activeOrganizationId) {
    return c.json(
      { message: "Organization not found" },
      HttpStatusCodes.FORBIDDEN
    );
  }

  const body = c.req.valid("json");
  const params = c.req.valid("param");

  // Check if the payment exists and belongs to this organization
  const existingPayment = await prisma.payment.findFirst({
    where: {
      id: params.id,
      organizationId: session.activeOrganizationId,
    },
  });

  if (!existingPayment) {
    return c.json({ message: "Payment not found" }, HttpStatusCodes.NOT_FOUND);
  }

  // Update the payment
  const updatedPayment = await prisma.payment.update({
    where: { id: params.id },
    data: body,
  });

  // Format the response to ensure dates are strings
  const formattedPayment = formatPayment(updatedPayment);

  return c.json(formattedPayment, HttpStatusCodes.OK);
};
