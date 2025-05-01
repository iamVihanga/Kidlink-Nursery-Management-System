/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";
import type {
  ListRoute,
  AddDetailsRoute,
  GetDetailsRoute,
  CreateBankDetailsRoute,
  GetBankDetailsRoute
} from "@/server/routes/nurseries/nurseries.routes";
import { AppRouteHandler } from "@/types/server";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const user = c.get("user");

  if (!user)
    return c.json(
      { message: "Unauthenticated user" },
      HttpStatusCodes.UNAUTHORIZED
    );

  const isAdmin = user?.role === "admin";

  const { page = "1", limit = "10", search = "" } = c.req.valid("query");

  // Convert to numbers and validate
  const pageNum = Math.max(1, parseInt(page));
  const limitNum = Math.max(1, Math.min(100, parseInt(limit)));
  const offset = (pageNum - 1) * limitNum;

  // For non-admin users, get the organizations they're enrolled in
  let userOrganizationIds: string[] = [];

  if (!isAdmin && user) {
    // Get the organizations where the user is a member
    const userMemberships = await prisma.member.findMany({
      select: { organizationId: true },
      where: { userId: user.id }
    });

    userOrganizationIds = userMemberships.map((m) => m.organizationId);

    if (userOrganizationIds.length === 0) {
      return c.json(
        {
          nurseries: [],
          pagination: {
            total: 0,
            page: pageNum,
            limit: limitNum,
            totalPages: 0
          }
        },
        HttpStatusCodes.OK
      );
    }
  }

  // Build the where condition based on user role and search parameter
  let whereCondition: any = {};

  // If not admin, add organization filter
  if (!isAdmin && userOrganizationIds.length > 0) {
    whereCondition.id = {
      in: userOrganizationIds
    };
  }

  // Add search condition if provided
  if (search && search.trim() !== "") {
    whereCondition.name = {
      contains: search,
      mode: "insensitive" // Case insensitive search
    };
  }

  // First, get the total count
  const totalOrganizations = await prisma.organization.count({
    where: whereCondition
  });

  // Then get the paginated items
  const organizations = await prisma.organization.findMany({
    where: whereCondition,
    skip: offset,
    take: limitNum,
    orderBy: {
      createdAt: "desc"
    }
  });

  return c.json(
    {
      nurseries: organizations,
      pagination: {
        total: totalOrganizations,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(totalOrganizations / limitNum)
      }
    },
    HttpStatusCodes.OK
  );
};

export const addDetails: AppRouteHandler<AddDetailsRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated user" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  // Get the nursery ID from the request parameters
  const { id } = c.req.valid("param");

  // Get nursery (organization) by id
  const organization = await prisma.organization.findUnique({
    where: { id },
    include: {
      nurseryDetails: true
    }
  });

  if (!organization) {
    return c.json({ message: "Nursery not found" }, HttpStatusCodes.NOT_FOUND);
  }

  // Check if the user is a admin / owner of the organization
  const currentUserOrgRole = await prisma.member.findFirst({
    where: { organizationId: organization.id, userId: user.id },
    select: { role: true }
  });

  if (currentUserOrgRole?.role !== "owner") {
    if (currentUserOrgRole?.role !== "admin") {
      return c.json(
        {
          message:
            "Request Forbidden: Only Nursery owners or admins can update nursery details"
        },
        HttpStatusCodes.FORBIDDEN
      );
    }
  }

  // Get the nursery details from the request body
  const newNurseryDetails = c.req.valid("json");

  /**
   * Check nursery details already exists
   * - If it exists, update it
   * - If it doesn't exist, create it
   */
  if (organization.nurseryDetails) {
    const updatedRecord = await prisma.nurseryDetails.update({
      where: { id: organization.nurseryDetails.id },
      data: newNurseryDetails
    });

    return c.json(updatedRecord, HttpStatusCodes.OK);
  }

  const createdRecord = await prisma.nurseryDetails.create({
    data: {
      address: (newNurseryDetails?.address || "").toString(),
      email: (newNurseryDetails?.email || "").toString(),
      phoneNumber: (newNurseryDetails?.phoneNumber || "").toString(),
      themePrimaryColor: (
        newNurseryDetails?.themePrimaryColor || ""
      ).toString(),
      themeSecondaryColor: (
        newNurseryDetails?.themeSecondaryColor || ""
      ).toString(),
      organizationId: organization.id
    }
  });

  return c.json(createdRecord, HttpStatusCodes.OK);
};

export const getDetails: AppRouteHandler<GetDetailsRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated user" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  // Get the nursery ID from the request parameters
  const { id } = c.req.valid("param");

  // Get nursery (organization) by id
  const organization = await prisma.organization.findUnique({
    where: { id },
    include: {
      nurseryDetails: true
    }
  });

  if (!organization) {
    return c.json({ message: "Nursery not found" }, HttpStatusCodes.NOT_FOUND);
  }

  if (!organization.nurseryDetails) {
    return c.json(
      { message: "Nursery details not found" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  return c.json(organization.nurseryDetails, HttpStatusCodes.OK);
};

export const getBankDetails: AppRouteHandler<GetBankDetailsRoute> = async (
  c
) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated user" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  // Get the nursery ID from the request parameters
  const { id } = c.req.valid("param");

  // Get nursery (organization) by id
  const organization = await prisma.organization.findUnique({
    where: { id },
    select: { nurseryDetails: true }
  });

  if (!organization) {
    return c.json({ message: "Nursery not found" }, HttpStatusCodes.NOT_FOUND);
  }

  if (!organization.nurseryDetails) {
    return c.json(
      { message: "Nursery details not added" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  // Get nursery bank details by organization id
  const bankDetails = await prisma.bankDetails.findUnique({
    where: { nurseryDetailsId: organization.nurseryDetails.id }
  });

  if (!bankDetails) {
    return c.json(
      { message: "Bank details not found" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  return c.json(bankDetails, HttpStatusCodes.OK);
};

export const createBankDetails: AppRouteHandler<
  CreateBankDetailsRoute
> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated user" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  // Get the nursery ID from the request parameters
  const { id } = c.req.valid("param");
  const body = c.req.valid("json");

  const nursery = await prisma.organization.findUnique({
    where: { id },
    include: { nurseryDetails: true }
  });

  if (!nursery || !nursery.nurseryDetails) {
    return c.json(
      { message: "Nursery or Nursery Details not found" },
      HttpStatusCodes.NOT_FOUND
    );
  }

  // Create nursery bank details
  const createdBankDetails = await prisma.bankDetails.create({
    data: {
      ...body,
      nurseryDetailsId: nursery.nurseryDetails.id
    }
  });

  return c.json(createdBankDetails, HttpStatusCodes.OK);
};
