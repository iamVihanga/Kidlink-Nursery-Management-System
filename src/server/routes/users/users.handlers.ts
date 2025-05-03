import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";
import type { GetOne } from "@/server/routes/users/users.routes";
import { AppRouteHandler } from "@/types/server";

export const getOne: AppRouteHandler<GetOne> = async (c) => {
  const user = c.get("user");
  const isSystemAdmin = user?.role === "admin";

  const { id } = c.req.valid("param");

  if (!id) throw new Error("User ID is required");

  if (!user) {
    return c.json(
      { message: "Unauthenticated access" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  // Check if the user is a system admin or the same user
  if (!isSystemAdmin) {
    if (user.id !== id) {
      return c.json({ message: "Access forbidden" }, HttpStatusCodes.FORBIDDEN);
    }
  }

  const foundUser = await prisma.user.findUnique({
    where: { id }
  });

  if (!foundUser) {
    return c.json({ message: "User not found" }, HttpStatusCodes.NOT_FOUND);
  }

  return c.json(foundUser, HttpStatusCodes.OK);
};
